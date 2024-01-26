import { SCREEN_NAMES } from '@constants'

export type ScreenName = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES]

type RootStackParamList = {
  [SCREEN_NAMES.TAB_NAVIGATION]: undefined
  [SCREEN_NAMES.HOME]: undefined
  [SCREEN_NAMES.PHOTO]: undefined
  [SCREEN_NAMES.DETAIL_PHOTO_STACK]: undefined
  [SCREEN_NAMES.DETAIL_PHOTO]: undefined
}

export { type RootStackParamList }
