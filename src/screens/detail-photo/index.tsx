import { View, Text } from 'react-native'

import { styles } from './styles'

const DetailPhoto = ({route}) => {
  console.log('route', route?.params)
  return (
    <View style={styles.container}>
      <Text>Detail Photo Screen</Text>
    </View>
  )
}

export { DetailPhoto }
