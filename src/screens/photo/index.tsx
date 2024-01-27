import { useState, useRef, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Linking, Pressable, Alert } from 'react-native'
import { Camera, useCameraDevice, useCameraPermission, PhotoFile, TakePhotoOptions } from 'react-native-vision-camera'
import { useFocusEffect } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { useTranslation } from 'react-i18next'

import { NavigationService } from '@services'
import { Images } from '@constants'
import { globalStyles, theme } from '@theme'
import { moderateScale, horizontalScale, verticalScale } from '@helpers'
import { Button } from '@components'

import { styles } from './styles'
import { CustomModal } from '../../components/modal'

const Photo = () => {
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [photo, setPhoto] = useState<PhotoFile>()
  const [flash, setFlash] = useState<TakePhotoOptions['flash']>('off')
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const navigation = useNavigation()
  const { t } = useTranslation()

  const camera = useRef<Camera>(null)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  useFocusEffect(
    useCallback(() => {
      setIsActive(true)

      return () => {
        setIsActive(false)
      }
    }, []),
  )

  useFocusEffect(
    useCallback(() => {
      if (photo) {
        navigation.setOptions({
          headerShown: false,
        })
      }
    }, [photo]),
  )

  useEffect(() => {
    if (!hasPermission) {
      requestPermission()
    }

    if (hasPermission === false) {
      toggleModal()
    }
  }, [hasPermission])

  if (!hasPermission) {
    return (
      <View style={globalStyles.center}>
        <ActivityIndicator size='large' color={theme.colors.orange} />
        <CustomModal visible={modalVisible}>
          <View style={globalStyles.globalPadding}>
            <Text>{t('Photo.enabled-permission')}</Text>
          </View>
          <View style={[globalStyles.globalPadding, styles.modalFooter]}>
            <Button
              title='Ir a configuracion'
              onPress={() => {
                Linking.openSettings()
                toggleModal()
                NavigationService.goBack()
              }}
              mode='contained'
            />
          </View>
        </CustomModal>
      </View>
    )
  }

  if (!device) {
    return (
      <View style={globalStyles.center}>
        <Images.General.NoPhone width={horizontalScale(200)} height={verticalScale(200)} />
        <Text style={[globalStyles.text_fs16, styles.noPhone]}>{t('Photo.empty')}</Text>
      </View>
    )
  }

  const takePicture = async () => {
    const photo = await camera.current?.takePhoto({
      flash,
    })
    setPhoto(photo)
  }

  const savePhoto = async () => {
    try {
      const savedPhoto = await CameraRoll.save(`file://${photo?.path}`, {
        type: 'photo',
      })
      Alert.alert(t('Photo.save'), t('Photo.confirm'), [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },

        {
          text: 'OK',
          onPress: () => {
            savedPhoto
            setPhoto(undefined)
          },
        },
      ])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={globalStyles.flex}>
      <>
        <Camera
          ref={camera}
          device={device}
          isActive={isActive && !photo}
          style={StyleSheet.absoluteFill}
          photo={true}
        />
      </>

      {photo ? (
        <View>
          <FastImage source={{ uri: 'file://' + photo?.path }} style={styles.photo} />
          <Icon
            name='arrow-back-ios'
            size={moderateScale(24)}
            color={theme.colors.white}
            style={styles.back}
            onPress={() => setPhoto(undefined)}
          />
          <View style={styles.footer}>
            <View style={styles.containerButton}>
              <Button title='Save Photo' mode='contained' onPress={savePhoto} />
            </View>
          </View>
        </View>
      ) : (
        <>
          <Icon
            name={flash === 'off' ? 'flash-off' : 'flash-on'}
            size={moderateScale(24)}
            color={theme.colors.white}
            style={styles.flash}
            onPress={() => setFlash(flash === 'off' ? 'on' : 'off')}
          />
          <Pressable style={styles.button} onPress={takePicture} />
        </>
      )}
    </View>
  )
}

export { Photo }
