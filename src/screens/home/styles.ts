import { StyleSheet } from 'react-native'

import { verticalScale } from '@helpers'

export const styles = StyleSheet.create({
  containerList: {
    marginTop: verticalScale(30),
  },
  center: {
    alignSelf: 'center',
  },
  noPic: {
    marginTop: verticalScale(10),
  },
})
