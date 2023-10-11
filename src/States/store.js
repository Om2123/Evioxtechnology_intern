import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './feat/cart/basketSlice'
export const store = configureStore({
  reducer: {
    counter:basketReducer,
  },
})