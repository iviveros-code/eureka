import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { OneScreenExample, TwoScreenExample, ThreeScreenExample } from '@screens'
import { NAVIGATION } from '@constants'

import { TabBar } from './components'

export const Navigation = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={TabBar}>
      <Tab.Screen name={NAVIGATION.HOME.HOME} component={OneScreenExample} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name={NAVIGATION.FAV.FAV} component={TwoScreenExample} options={{ tabBarLabel: 'Favorites' }} />
      <Tab.Screen
        name={NAVIGATION.PROFILE.PROFILE}
        component={ThreeScreenExample}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  )
}
