import { configureStore } from '@reduxjs/toolkit'
import RecycleSlice from './RecycleSlice'

export default configureStore({
  reducer: {
    rec: RecycleSlice
  }
})