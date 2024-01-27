import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

import { styles } from './styles'

const DetailPhoto = ({ route }) => {
  const { item } = route?.params

  return (
    <View style={styles.container}>
      <FastImage
        style={{
          width: 400,
          height: 400,
          alignSelf: 'center',
          marginTop: 20,
        }}
        source={{
          uri: 'file://' + item,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  )
}

export { DetailPhoto }
