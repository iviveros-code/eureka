import { StyleSheet } from 'react-native'

import { theme } from '@theme'
import { verticalScale, moderateScale } from '@helpers'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.orange,
    height: verticalScale(50),
    borderRadius: 10,
    justifyContent: 'center',
  },
  labelStyle: {
    letterSpacing: 0,
    fontSize: moderateScale(16),
  },
  disabled: {
    opacity: 0.3,
  },
  outlined: {
    fontSize: moderateScale(12),
  },
})
