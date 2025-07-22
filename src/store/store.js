import { configureStore } from '@reduxjs/toolkit'
import { TeamRuduser } from './TeamSlice'

export const store = configureStore({
  reducer: {
    Team :TeamRuduser ,
  },
})