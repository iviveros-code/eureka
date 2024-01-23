import React from 'react';
import {Image} from 'react-native';

import {Images, NAVIGATION} from '@constants';
import {styles} from './styles';

export const TabBar = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let iconName;

    if (route.name === NAVIGATION.HOME.HOME) {
      iconName = focused
        ? Images.TabBar.Home_Focused
        : Images.TabBar.Home_Outline;
    } else if (route.name === NAVIGATION.FAV.FAV) {
      iconName = focused
        ? Images.TabBar.Fav_Focused
        : Images.TabBar.Fav_Outline;
    } else if (route.name === NAVIGATION.PROFILE.PROFILE) {
      iconName = focused
        ? Images.TabBar.Profile_Focused
        : Images.TabBar.Profile_Outline;
    }

    return <Image source={iconName} style={{width: 30, height: 30}} />;
  },
  tabBarActiveTintColor: 'red',
  tabBarInactiveTintColor: 'green',
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarItemStyle: styles.tabBarItemStyle,
  tabBarStyle: styles.tabBarStyle,
  safeAreaInset: {bottom: 'never', top: 'never'},
  headerShown: false,
  lazy: false,
});
