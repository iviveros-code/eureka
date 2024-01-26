import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

import { SCREEN_NAMES } from '@constants'
import { theme } from '@theme'

import { styles } from './styles'

interface TabBarProps {
  route: RouteProp<ParamListBase, string>
}

//TODO: fix warning react-native-vector-icons and real icons not images

export const TabBar: (props: TabBarProps) => BottomTabNavigationOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName
    const color = focused ? theme.colors.primary_red : theme.colors.background_grey

    if (route.name === SCREEN_NAMES.HOME) {
      iconName = focused ? 'image' : 'image'
    } else if (route.name === SCREEN_NAMES.PHOTO) {
      iconName = focused ? 'favorite' : 'favorite'
    } else {
      iconName = 'favorite'
    }

    return <Icon name={iconName} size={24} color={color} />
  },
  tabBarActiveTintColor: theme.colors.primary_red,
  tabBarInactiveTintColor: theme.colors.grey,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarItemStyle: styles.tabBarItemStyle,
  tabBarStyle: styles.tabBarStyle,
  safeAreaInset: { bottom: 'never', top: 'never' },
  headerShown: false,
  lazy: false,
})
