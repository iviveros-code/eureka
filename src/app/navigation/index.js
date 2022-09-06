import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Favorites} from '@screens';

import {HomeStack} from './stackNav';
import {NAVIGATION} from '@constants';
import {TabBar} from './components';

export const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={TabBar}>
      <Tab.Screen
        name={NAVIGATION.HOME.STACK}
        component={HomeStack}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name={NAVIGATION.FAV.FAV}
        component={Favorites}
        options={{tabBarLabel: 'Favorites'}}
      />
    </Tab.Navigator>
  );
};
