import { configureStore } from '@reduxjs/toolkit'
import count from './counter/counterslice'

export default configureStore({
  reducer: {
    counter : count,
  },
})