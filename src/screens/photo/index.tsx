import { useState, useRef, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Linking, Pressable, Alert, Platform } from 'react-native'
import { Camera, useCameraDevice, useCameraPermission, PhotoFile, TakePhotoOptions } from 'react-native-vision-camera'
import { useFocusEffect } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Geolocation from 'react-native-geolocation-service'
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'

import { NavigationService } from '@services'
import { Images } from '@constants'
import { globalStyles, theme } from '@theme'
import { moderateScale, horizontalScale, verticalScale } from '@helpers'
import { Button, CustomModal } from '@components'
import { addPhoto } from '@redux/photos-slice'
import { RootState } from '@redux/store'

import { styles } from './styles'

const Photo = () => {
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [photo, setPhoto] = useState<PhotoFileWithLocation>()
  const [flash, setFlash] = useState<TakePhotoOptions['flash']>('off')
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const navigation = useNavigation()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const photos = useSelector((state: RootState) => state.photos.photos)

  const camera = useRef<Camera>(null)

  interface Position {
    coords: {
      latitude: number
      longitude: number
    }
  }
  interface PhotoFileWithLocation extends PhotoFile {
    location?: {
      latitude: number
      longitude: number
    }
  }

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
      if (photos.length > 0) {
        navigation.setOptions({
          headerShown: true,
        })
      }
    }, [photo, photos]),
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
          <View style={[globalStyles.globalPadding, globalStyles.center]}>
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

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, {
        title: 'Location Permission',
        message: 'We need your permission to access your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      })

      return status === RESULTS.GRANTED
    }

    if (Platform.OS === 'android') {
      const status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
        title: 'Location Permission',
        message: 'We need your permission to access your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      })

      return status === RESULTS.GRANTED
    }

    return false
  }

  const takePicture = async () => {
    const photo = await camera.current?.takePhoto({
      flash,
    })

    if (photo) {
      const hasPermission = await requestLocationPermission()

      if (hasPermission) {
        try {
          const position = await new Promise<Position>((resolve, reject) => {
            Geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 10000,
            })
          })

          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }

          setPhoto({ ...photo, location })
        } catch (error) {
          console.log('error =>', error)
          setPhoto(photo)
        }
      } else {
        console.log('denied permission')
      }
    }
  }

  const savePhoto = async () => {
    try {
      const savedPhoto = await CameraRoll.save(`file://${photo?.path}`, {
        type: 'photo',
      })
      const location = photo?.location
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
            dispatch(addPhoto({ id: Math.random(), path: savedPhoto, location }))
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
              <Button title={t('Photo.save')} mode='contained' onPress={savePhoto} />
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
