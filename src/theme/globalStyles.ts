import { StyleSheet } from 'react-native'

import { FontSize12, FontSize16 } from '@constants'
import { horizontalScale } from '@helpers'

export const createGlobalStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary_green,
    },

    text_fs12: {
      fontSize: FontSize12,
      color: theme.colors.black,
      ...theme.fonts.regular,
    },
    text_fs16: {
      fontSize: FontSize16,
      color: theme.colors.black,
      ...theme.fonts.regular,
    },
    text_fs16_white: {
      fontSize: FontSize16,
      color: theme.colors.white,
      ...theme.fonts.regular,
    },

    flex: {
      flex: 1,
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    globalPadding: {
      paddingHorizontal: horizontalScale(24),
    },
  })
