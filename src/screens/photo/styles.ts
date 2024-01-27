import { StyleSheet } from 'react-native'

import { theme } from '@theme'
import { verticalScale, horizontalScale, moderateScale } from '@helpers'

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: verticalScale(50),
    width: horizontalScale(75),
    height: verticalScale(75),
    backgroundColor: 'white',
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(5),
    borderColor: theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  back: {
    position: 'absolute',
    top: moderateScale(24),
    left: moderateScale(24),
  },
  flash: {
    position: 'absolute',
    top: moderateScale(24),
    right: moderateScale(24),
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: theme.colors.backdropColor,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.backdropColor,
    paddingHorizontal: horizontalScale(24),
  },
  containerButton: {
    paddingVertical: verticalScale(40),
  },
  noPhone: {
    marginTop: verticalScale(10),
  },
  modalFooter: {
    flex:1,
    justifyContent: 'flex-end',
    marginBottom: verticalScale(20),
  },
})
