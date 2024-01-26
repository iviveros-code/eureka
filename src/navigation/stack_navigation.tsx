import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import { Home, Photo, DetailPhoto } from '@screens'
import { RootStackParamList } from '@types'
import { SCREEN_NAMES } from '@constants'

import { headerConfig } from './header-config'

const StackNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAMES.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.PHOTO}
        component={Photo}
        options={{
          ...headerConfig('Photo'),
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.DETAIL_PHOTO}
        component={DetailPhoto}
        options={{
          ...headerConfig('Detail Photo'),

          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  )
}

export { StackNavigation }
