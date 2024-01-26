import './src/i18n'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import SplashScreen from 'react-native-splash-screen'

import { StackNavigation } from '@navigation/stack_navigation'
import { theme } from '@theme'

import store from './src/redux/store'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  )
}

export default App
