import { configureStore } from '@reduxjs/toolkit'
import coun from './features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    co: coun,
  },
})