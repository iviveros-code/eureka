import { View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

import { styles } from './styles'

interface Props {
  uri: string
  onPress?: () => void
}

const CardPhotos = ({ uri, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <FastImage
          style={styles.image}
          source={{
            uri: 'file://' + uri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </TouchableOpacity>
  )
}

export { CardPhotos }
