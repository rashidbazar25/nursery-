import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    {

    id: 1,
    time: "08:30 - 08:45",
    statment: "Arrival and collection by the Teacher and Nannies on the Main Stage",
  },
  {

    id: 2,
    time: "09:00 - 09:20",
    statment: "Circle time",
  },

   {

    id: 3,
    time: "09:30 - 10:00",
    statment: "Educational Class Alfa Blocks read&write",
  },
   

   {

    id: 4,
    time: "10:00 - 10:30",
    statment: "Breakfast",
  },
   

   {

    id: 5,
    time: "10:30 - 11:00",
    statment: "Play/Gym/outdoors",
  },
   

   {

    id: 6,
    time: "11:00 - 11:30",
    statment: "Finger Theater - active listening and analysis of the story",
  },
   

   {

    id: 7,
    time: "11:30 - 12:00",
    statment: "Neuro Class - brain stimulation activities (Neuro room)",
  },
   
   
    
 ]
  

const DailyScheduleSliceMorning = createSlice({
    name:"Price-slice",
    initialState ,
    reducers :{

    }
})

export const dailyScheduleSliceMorningReduser = DailyScheduleSliceMorning.reducer;