import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import photosReducer from './photos-slice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['photos'],
}

const rootReducer = combineReducers({
  photos: photosReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(),
})
const persistor = persistStore(store)

export const storePersistor = persistor
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store
