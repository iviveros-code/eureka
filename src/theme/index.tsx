import { DefaultTheme } from 'react-native-paper'
import { Font } from 'react-native-paper/lib/typescript/types'

import { createGlobalStyles } from './globalStyles'

export const theme = {
  ...DefaultTheme,
  version: 2,
  isV3: false,
  colors: {
    ...DefaultTheme.colors,
    white: '#FFFFFF',
    black: '#000000',
    grey: 'grey',
    blue: '#1A73E7',
    primary_gray: '#888888',
    primary_green: '#38B000',
    primary_green_dark: '#004D2A',
    primary_black: '#434A47',
    green_disabled: '#CCE8B1',
    green_disabled_dark: 'rgba(0, 77, 42, 0.3)',
    secondary_black: '#5A6460',
    alternative_black: '#4B5561',
    alernative_gray: '#CECECE',
    placeholder: '#888888',
    underline: '#D9D9D9',
    green_gradient: ['#38B000', '#9DEB51'],
    green_gradient_inverse: ['#9DEB51', '#38B000'],
    shadow: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    tabBarShadow: 'rgba(0, 92, 51, 0.08)',
    transparent: 'transparent',
    background_black: '#2D2D2D',
    background_input: '#F1F1F1',
    check_blue: '#1A73E7',
    error: '#BC3C5A',
    backdropColor: 'rgba(0, 0, 0, 0.3)',
    background_onboarding: '#F5F5F5',
    background_skeleton: 'rgba(0,0,0,0.12)',
    gradient_skeleton: ['transparent', 'rgba(0,0,0,0.05)', 'transparent'],
    background_grey: '#F0F0F0',
    backgrund_green: '#7FC53B',
    green_light_gradient: ['#FFFFFF', '#7FC53B'],
    green_light: '#7FC53B',
  },

  fonts: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: '400' as Font['fontWeight'],
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: '500' as Font['fontWeight'],
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: '300' as Font['fontWeight'],
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: '100' as Font['fontWeight'],
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: '700' as Font['fontWeight'],
    },
    black: {
      fontFamily: 'Roboto-Black',
      fontWeight: '900' as Font['fontWeight'],
    },
    italic: {
      fontFamily: 'Roboto-BoldItalic',
      fontWeight: '700' as Font['fontWeight'],
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
    xxl: 64,
  },

  icon: {
    width: 32,
    height: 32,
  },
}

export const globalStyles = createGlobalStyles(theme)
