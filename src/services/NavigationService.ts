import { createNavigationContainerRef } from '@react-navigation/native'
import { RootStackParamList } from '@navigation'
import { ScreenName } from '@types'

const ref = createNavigationContainerRef<RootStackParamList>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const navigate = (screenName: ScreenName, params?: any) => {
  if (ref.isReady()) {
    ref.navigate(screenName, params)
  }
}

const goBack = () => {
  if (ref.isReady()) {
    ref.goBack()
  }
}

export const NavigationService = {
  ref,
  navigate,
  goBack,
}
