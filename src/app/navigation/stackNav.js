import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Details} from '@screens';

import {NAVIGATION} from '@constants';

export const HomeStack = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={NAVIGATION.HOME.HOME} component={Home} />
      <Stack.Screen name={NAVIGATION.HOME.DETAILS} component={Details} />
    </Stack.Navigator>
  );
};
