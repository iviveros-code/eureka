import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {styles} from './styles';

export const TwoScreenExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleExample}>TwoScreenExample</Text>
    </SafeAreaView>
  );
};
