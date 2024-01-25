import { StyleSheet } from 'react-native'

import { theme } from '@theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleExample: {
    alignSelf: 'center',
  },
  image: {},
  title: {
    fontWeight: '700',
    color: theme.colors.black,
  },
})
