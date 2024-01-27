import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Button, CardPhotos } from '@components'
import { NavigationService } from '@services'
import { SCREEN_NAMES, Images } from '@constants'
import { horizontalScale, verticalScale } from '@helpers'
import { globalStyles } from '@theme'
import { RootState } from '@redux/store'

import { styles } from './styles'

const Home = () => {
  const photos = useSelector((state: RootState) => state.photos.photos)
  const { t } = useTranslation()

  const goToPhoto = () => {
    NavigationService.navigate(SCREEN_NAMES.PHOTO)
  }

  return (
    <View style={globalStyles.flex}>
      {photos?.length > 0 ? (
        <FlatList
          style={styles.containerList}
          contentContainerStyle={[globalStyles.globalPadding, styles.center]}
          data={photos}
          renderItem={({ item }) => {
            return (
              <CardPhotos uri={item} onPress={() => NavigationService.navigate(SCREEN_NAMES.DETAIL_PHOTO, { item })} />
            )
          }}
          keyExtractor={item => item}
          numColumns={3}
        />
      ) : (
        <SafeAreaView style={globalStyles.center}>
          <Images.General.NoImage width={horizontalScale(200)} height={verticalScale(200)} />
          <Text style={[globalStyles.text_fs16, styles.noPic]}>{t('Home.empty')}</Text>
        </SafeAreaView>
      )}

      <View style={globalStyles.footer}>
        <Button title='Take Picture' onPress={goToPhoto} mode='contained' />
      </View>
    </View>
  )
}

export { Home }
