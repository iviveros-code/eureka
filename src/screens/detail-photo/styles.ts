import { StyleSheet } from 'react-native'

import { horizontalScale, verticalScale } from '@helpers'

export const styles = StyleSheet.create({
  photo: {
    width: horizontalScale(430),
    height: verticalScale(450),
    alignSelf: 'center',
    marginTop: verticalScale(20),
    aspectRatio: 1,
  },
  fontWeight: {
    fontWeight: 'bold',
  },
  widthAddress: {
    width: '70%',
  },
  container:{
    marginTop: verticalScale(20),
  }
})
