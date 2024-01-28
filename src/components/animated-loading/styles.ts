import { StyleSheet } from 'react-native'

import { theme } from '@theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: theme.colors.black,
    borderTopColor: 'rgba(0,0,0,0.005)',
    borderBottomColor: 'rgba(255,255,255,0.005)',
  },
  image: {
    position: 'absolute',
    width: 85,
    height: 80,
  },
})
