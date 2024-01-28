import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PhotoInfo } from '@types'

interface PhotoState {
  photos: PhotoInfo[]
}

const initialState: PhotoState = {
  photos: [],
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<PhotoInfo>) => {
      state.photos.push(action.payload)
    },
  },
})

export const { addPhoto } = photosSlice.actions

const photosReducer = photosSlice.reducer

export default photosReducer
