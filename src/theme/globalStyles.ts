import { StyleSheet } from 'react-native'

import { verticalScale } from '@helpers'
import {
  FontSize10,
  FontSize12,
  FontSize14,
  FontSize16,
  FontSize18,
  FontSize32,
  IS_ANDROID,
  FontSize24,
  FontSize13,
} from '@constants'

export const createGlobalStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary_green,
    },

    text_fs12: {
      fontSize: FontSize12,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.regular,
    },

    footerButtons: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: verticalScale(20),
    },
    marginButtons: {
      marginVertical: verticalScale(10),
    },
    containerTitle: {
      alignSelf: 'center',
    },
    title: {
      textAlign: 'center',
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    jcontent: {
      justifyContent: 'space-between',
    },
    screen: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    },
  })
