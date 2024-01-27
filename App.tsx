import './src/i18n'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/integration/react'

import { NavigationService } from '@services'
import { StackNavigation } from '@navigation/stack_navigation'
import { theme } from '@theme'

import store, { storePersistor } from './src/redux/store'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={storePersistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer ref={NavigationService.ref}>
            <StackNavigation />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
