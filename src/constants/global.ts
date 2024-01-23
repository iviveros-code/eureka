import { Platform, Dimensions } from 'react-native'
import DeviceInfo, { hasNotch } from 'react-native-device-info'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = Platform.OS === 'ios'
export const WIDTH_DEVICE = Dimensions.get('screen').width
export const HEIGHT_DEVICE = Dimensions.get('window').height
export const SCREEN = Dimensions.get('screen')
export const deviceModel = DeviceInfo.getModel()
export const IS_PROMAX = deviceModel.includes('Pro Max')
export const IS_PLUS = deviceModel.includes('Plus')
export const HAS_NOTCH = hasNotch()

export const FontSize10 = RFPercentage(1.4)
export const FontSize12 = RFPercentage(1.5)
export const FontSize13 = RFPercentage(1.6)
export const FontSize14 = RFPercentage(1.7)
export const FontSize16 = RFPercentage(2)
export const FontSize18 = RFPercentage(2.2)
export const FontSize24 = RFPercentage(2.8)
export const FontSize32 = RFPercentage(3.9)
