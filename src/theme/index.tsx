import { MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { Font } from 'react-native-paper/lib/typescript/types'

import { createGlobalStyles } from './globalStyles'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: '#FFFFFF',
    black: '#564f4b',
    grey: 'grey',
    blue: '#1A73E7',
    orange: '#fd7100',
    transparent: 'transparent',
    error: '#BC3C5A',
    backdropColor: 'rgba(0, 0, 0, 0.3)',
  },

  fonts: {
    ...DefaultTheme.fonts,
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

  general_spacing: {
    md: 10,
    lg: 20,
  },

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
}

export const globalStyles = createGlobalStyles(theme)
