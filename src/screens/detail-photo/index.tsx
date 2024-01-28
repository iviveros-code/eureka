import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'

import { useGeocodeQuery } from '@redux/geocoder-slice'
import { globalStyles } from '@theme'
import { AnimatedLoading } from '@components'
import { RootStackParamList, Item } from '@types'

import { styles } from './styles'

type DetailPhotoScreenRouteProp = RouteProp<RootStackParamList, 'DETAIL_PHOTO'>
type DetailPhotoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DETAIL_PHOTO'>

type DetailPhotoProps = {
  route: DetailPhotoScreenRouteProp
  navigation: DetailPhotoScreenNavigationProp
}

const DetailPhoto = ({ route }: DetailPhotoProps) => {
  const item: Item = route?.params?.item
  const { t } = useTranslation()

  const { data: geocodeData, isLoading } = useGeocodeQuery({
    latitude: item?.location?.latitude,
    longitude: item?.location?.longitude,
  })

  const address = geocodeData?.results[0]?.formatted_address

  return (
    <>
      {isLoading ? (
        <View style={globalStyles.center}>
          <AnimatedLoading />
        </View>
      ) : (
        <>
          <View style={globalStyles.flex}>
            <FastImage
              style={styles.photo}
              source={{
                uri: 'file://' + item?.path,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />

            <View style={[globalStyles.globalPadding, styles.container]}>
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
          </View>
        </>
      )}
    </>
  )
}

export { DetailPhoto }
