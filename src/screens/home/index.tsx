import { View, Text } from 'react-native'

import { Button } from '@components'
import { NavigationService } from '@services'
import { SCREEN_NAMES } from '@constants'

import { styles } from './styles'

const Home = () => {
  const goToPhoto = () => {
    NavigationService.navigate(SCREEN_NAMES.PHOTO)
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={{}}>
        <Button title='Take Picture' onPress={goToPhoto} mode='contained' />
      </View>
    </View>
  )
}

export { Home }
