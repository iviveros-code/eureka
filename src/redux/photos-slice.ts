import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PhotoState {
  photos: string[]
}

const initialState: PhotoState = {
  photos: [],
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<string>) => {
      state.photos.push(action.payload)
    },
  },
})

export const { addPhoto } = photosSlice.actions

const photosReducer = photosSlice.reducer

export default photosReducer
