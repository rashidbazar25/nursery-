import { configureStore } from '@reduxjs/toolkit'
import { TeamRuduser } from './TeamSlice'
import { PriceRuduser } from './Price'
import { costPriceSliceReduser } from './daycare'
import { dailyScheduleSliceMorningReduser } from './DailyScheduleMorning'
import { ReviewsSliceReduser } from './ReviewsSlice'

export const store = configureStore({
  reducer: {
    Team :TeamRuduser ,
    Price :PriceRuduser ,
    costPrice : costPriceSliceReduser,
    dailaySchedule:dailyScheduleSliceMorningReduser,
    reviews : ReviewsSliceReduser
  },
})