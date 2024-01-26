import { View, Text } from 'react-native'

import { Button } from '@components'

import { styles } from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View>
        <Button
          title="Go to Photo"
          onPress={() => console.log('Go to Photo')}
        />
      </View>
    </View>
  )
}

export { Home }
