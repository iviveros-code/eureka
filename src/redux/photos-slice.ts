import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PhotoInfo } from '@types'
import { LocalStorageService } from '@services'

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
    removePhoto: (state, action: PayloadAction<number>) => {
      const photoIdToRemove = action.payload

      const index = state.photos.findIndex(photo => photo.id === photoIdToRemove)
      if (index !== -1) {
        state.photos.splice(index, 1)

        LocalStorageService.removeLocalStorage(`photo_${photoIdToRemove}`).catch(error => {
          console.error(`Error removing photo with ID ${photoIdToRemove} from AsyncStorage: ${error}`)
        })
      }
    },
  },
})

export const { addPhoto, removePhoto } = photosSlice.actions

const photosReducer = photosSlice.reducer

export default photosReducer
