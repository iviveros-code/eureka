import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

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
    text_fs10_gd: {
      fontSize: FontSize10,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.regular,
    },
    text_fs10_white: {
      fontSize: FontSize10,
      color: theme.colors.white,
      ...theme.fonts.regular,
    },
    text_fs12: {
      fontSize: FontSize12,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.regular,
    },
    text_fs12_pgreen: {
      fontSize: FontSize12,
      color: theme.colors.primary_green,
      ...theme.fonts.regular,
    },
    text_fs12_black: {
      fontSize: FontSize12,
      color: theme.colors.primary_black,
      ...theme.fonts.regular,
    },
    text_fs12_white: {
      fontSize: FontSize12,
      color: theme.colors.white,
      ...theme.fonts.regular,
    },
    text_fs13_gd: {
      fontSize: FontSize13,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.regular,
    },
    text_fs14: {
      fontSize: FontSize14,
      color: theme.colors.primary_black,
      ...theme.fonts.regular,
    },
    text_fs14_sb: {
      fontSize: FontSize14,
      color: theme.colors.secondary_black,
      ...theme.fonts.regular,
    },
    text_fs14_gray: {
      fontSize: FontSize14,
      color: theme.colors.primary_gray,
      ...theme.fonts.regular,
    },
    text_fs16: {
      fontSize: FontSize16,
      color: theme.colors.primary_black,
      ...theme.fonts.regular,
    },
    text_fs16_bold: {
      fontSize: FontSize16,
      color: theme.colors.primary_black,
      ...theme.fonts.bold,
    },
    text_fs16_gd: {
      fontSize: FontSize16,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.regular,
    },
    text_fs16_gd_italic: {
      fontSize: FontSize16,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.italic,
    },
    text_fs16_g: {
      fontSize: FontSize16,
      color: theme.colors.primary_green,
      ...theme.fonts.regular,
    },
    text_fs16_white: {
      fontSize: FontSize16,
      color: theme.colors.white,
      ...theme.fonts.regular,
      fontWeight: '500',
    },
    text_fs18: {
      fontSize: FontSize18,
      color: theme.colors.primary_black,
      ...theme.fonts.regular,
      fontWeight: '500',
    },
    text_fs18_white: {
      fontSize: FontSize18,
      color: theme.colors.white,
      ...theme.fonts.light,
    },
    text_fs18_gd: {
      fontSize: FontSize18,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.regular,
      fontWeight: '500',
    },
    text_fs24: {
      fontSize: FontSize24,
      color: theme.colors.primary_black,
      ...theme.fonts.bold,
    },
    text_fs24_gd: {
      fontSize: FontSize24,
      color: theme.colors.primary_green_dark,
      ...theme.fonts.bold,
    },
    text_fs32: {
      fontSize: FontSize32,
      color: theme.colors.primary_green_dark,
      ...(IS_ANDROID ? theme.fonts.bold : theme.fonts.regular),
      fontWeight: '500',
    },
    text_fs32_black: {
      fontSize: FontSize32,
      color: theme.colors.primary_black,
      ...(IS_ANDROID ? theme.fonts.bold : theme.fonts.regular),
      fontWeight: '500',
    },
    footerButtons: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: hp(2),
    },
    marginButtons: {
      marginVertical: hp(1),
    },
    containerTitle: {
      alignSelf: 'center',
    },
    title: {
      textAlign: 'center',
    },
    footerButtonsKeyboard: {
      top: hp(25),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    overlapLayout: {
      bottom: hp(7.5),
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
