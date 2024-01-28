import { SCREEN_NAMES } from '@constants'

export type ScreenName = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES]

export interface PhotoInfo {
  id: number
  path: string
  location?: {
    latitude: number
    longitude: number
  }
}

export type Item = PhotoInfo

type RootStackParamList = {
  [SCREEN_NAMES.HOME]: undefined
  [SCREEN_NAMES.PHOTO]: undefined
  [SCREEN_NAMES.DETAIL_PHOTO]: { item: Item }
}

export { type RootStackParamList }
