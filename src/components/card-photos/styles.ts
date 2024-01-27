import { StyleSheet } from 'react-native'

import { horizontalScale, verticalScale } from '@helpers'

const imageSize = horizontalScale(110)

export const styles = StyleSheet.create({
  container: {
    width: imageSize,
    height: imageSize,
    alignSelf: 'center',
    marginVertical: verticalScale(10),
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
