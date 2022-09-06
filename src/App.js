import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';

import {Navigation} from '@navigation';
import store from '@redux/store';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({duration: 250});
    }, 1000);
  }, []);
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
