import { Platform, Dimensions } from 'react-native'

import { moderateScale } from '@helpers'

export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = Platform.OS === 'ios'
export const WIDTH_DEVICE = Dimensions.get('screen').width
export const HEIGHT_DEVICE = Dimensions.get('window').height
export const SCREEN = Dimensions.get('screen')

export const FontSize10 = moderateScale(10)
export const FontSize12 = moderateScale(12)
export const FontSize13 = moderateScale(13)
export const FontSize14 = moderateScale(14)
export const FontSize16 = moderateScale(16)
export const FontSize18 = moderateScale(18)
export const FontSize24 = moderateScale(24)
export const FontSize32 = moderateScale(32)
