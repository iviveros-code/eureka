import { StyleSheet } from 'react-native'

import { horizontalScale, verticalScale, moderateScale } from '@helpers'
import { theme } from '@theme'

export const styles = StyleSheet.create({
  photo: {
    width: horizontalScale(430),
    height: verticalScale(500),
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
  container: {
    marginTop: verticalScale(20),
  },
  trash: {
    bottom: verticalScale(20),
    right: horizontalScale(20),
    position: 'absolute',
    zIndex: 1,
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: theme.colors.backdropColor,
  },
  share: {
    bottom: verticalScale(20),
    left: horizontalScale(20),
    position: 'absolute',
    zIndex: 1,
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: theme.colors.backdropColor,
  },
  buttonContainer: {
    marginTop: verticalScale(20),
  },
})
