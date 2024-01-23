import { StyleSheet } from 'react-native'

import { FontSize18 } from '@constants'
import { theme } from '@theme'

export const styles = StyleSheet.create({
  input: {
    fontSize: FontSize18,
    color: theme.colors.secondary_black,
    backgroundColor: theme.colors.white,
    ...theme.fonts.regular,
  },
  outlineStyle: {
    borderWidth: 1.5,
  },
})
