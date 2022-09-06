import {configureStore} from '@reduxjs/toolkit';
import photoReducer from './photoSlice';

const store = configureStore({
  reducer: {
    photoRedux: photoReducer,
  },
});

export default store;
