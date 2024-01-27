import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import { Home, Photo, DetailPhoto } from '@screens'
import { RootStackParamList } from '@types'
import { SCREEN_NAMES, IS_ANDROID } from '@constants'

import { headerConfig } from './header-config'

const StackNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAMES.HOME}
        component={Home}
        options={{
          ...headerConfig('Eurekalabs'),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.PHOTO}
        component={Photo}
        options={{
          ...headerConfig(''),
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerTitle: '', //necessary for android
        }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.DETAIL_PHOTO}
        component={DetailPhoto}
        options={{
          ...headerConfig(''),
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerTitle: '', //necessary for android
        }}
      />
    </Stack.Navigator>
  )
}

export { StackNavigation }
