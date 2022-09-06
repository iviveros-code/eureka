import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  favoritePhotos: [],
  favorite: false,
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      return {
        ...state,
        photos: [...state.photos, action.payload],
      };
    },
    setAsFavorite: (state, action) => {
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload],
      };
    },
    changeFavorite: (state, action) => {
      return {
        ...state,
        favorite: action.payload,
      };
    }
  },
});

export const {addPhoto, setAsFavorite, changeFavorite} = photoSlice.actions;

const photoReducer = photoSlice.reducer;

export default photoReducer;
