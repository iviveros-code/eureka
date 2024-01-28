import { View, Text, Alert } from 'react-native'
import FastImage from 'react-native-fast-image'
import { RouteProp } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import Share from 'react-native-share'

import { removePhoto } from '@redux/photos-slice'
import { useGeocodeQuery } from '@redux/geocoder-slice'
import { globalStyles, theme } from '@theme'
import { AnimatedLoading, Button } from '@components'
import { RootStackParamList, Item } from '@types'
import { moderateScale } from '@helpers'
import { NavigationService } from '@services'

import { styles } from './styles'

type DetailPhotoScreenRouteProp = RouteProp<RootStackParamList, 'DETAIL_PHOTO'>

type DetailPhotoProps = {
  route: DetailPhotoScreenRouteProp
}

const DetailPhoto = ({ route }: DetailPhotoProps) => {
  const item: Item = route?.params?.item
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { data: geocodeData, isLoading } = useGeocodeQuery({
    latitude: item?.location?.latitude,
    longitude: item?.location?.longitude,
  })

  const address = geocodeData?.results[0]?.formatted_address

  const deletePhoto = () => {
    Alert.alert(
      t('Detail.delete'),
      t('Detail.confirm'),
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(removePhoto(item?.id))
            NavigationService.goBack()
          },
        },
      ],
      { cancelable: false },
    )
  }

  const sharePhoto = async () => {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      saveToFiles: true,
      url: 'file://' + item?.path,
      filename: 'file',
      message: 'Photo share using react-native-share',
    }
    try {
      const ShareResponse = await Share.open(shareOptions)
      console.log(JSON.stringify(ShareResponse))
    } catch (error) {
      console.log('Error =>', error)
    }
  }

  return (
    <>
      {isLoading ? (
        <View style={globalStyles.center}>
          <AnimatedLoading />
        </View>
      ) : (
        <>
          <View style={[globalStyles.flex, globalStyles.globalPadding]}>
            <View>
              <FastImage
                style={styles.photo}
                source={{
                  uri: 'file://' + item?.path,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Icon
                name='share-alt'
                size={moderateScale(24)}
                color={theme.colors.white}
                style={styles.share}
                onPress={sharePhoto}
              />
              <Icon
                name='trash-alt'
                size={moderateScale(24)}
                color={theme.colors.white}
                style={styles.trash}
                onPress={deletePhoto}
              />
            </View>

            <View style={styles.container}>
              <View style={globalStyles.row}>
                <Text style={[globalStyles.text_fs16, styles.fontWeight]}>{t('Detail.address')} </Text>
                <Text style={[globalStyles.text_fs12, styles.widthAddress]} numberOfLines={2}>
                  {address}
                </Text>
              </View>
              <View style={globalStyles.row}>
                <Text style={[globalStyles.text_fs16, styles.fontWeight]}>{t('Detail.latitude')} </Text>
                <Text style={globalStyles.text_fs12}>{item?.location?.latitude}</Text>
              </View>
              <View style={globalStyles.row}>
                <Text style={[globalStyles.text_fs16, styles.fontWeight]}>{t('Detail.longitude')} </Text>
                <Text style={globalStyles.text_fs12}>{item?.location?.longitude}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button title={'Share this photo'} mode={'contained'} onPress={sharePhoto} />
            </View>
          </View>
        </>
      )}
    </>
  )
}

export { DetailPhoto }
