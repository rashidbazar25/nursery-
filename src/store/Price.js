import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    {

    id: 1,
    name: "Hours",
    lineeone: "08:30 - 12:30",
    linetow: "08:30 - 14:30",
    linethree: "08:30 - 18:00",
  
  },
   {

   
    id: 2,
    name: "Month",
    lineeone: "6,050 AED",
    linetow: "6,270 AED",
    linethree: "6,425 AED",
  },
  {
    id: 3,
    name: "TERM 1",
    lineeone: "22,625 AED",
    linetow: "23,435 AED",
    linethree: "31,425 AED",
  },
  {
    id: 4,
    name: "TERM 2",
    lineeone: "17,625 AED",
    linetow: "18,435 AED",
    linethree: "23,425 AED",
  
  },

       {
    id: 5,
    name: "TERM 3",
    lineeone: "14,550 AED",
    linetow: "15,145 AED",
    linethree: "22,425 AED",
  },

       {
    id: 6,
    name: "YEAR",
    lineeone: "44,050 AED",
    linetow: "46,270 AED",
    linethree: "63,425 AED",
  
  },
    
 ]
  

const PriceSlice = createSlice({
    name:"Price-slice",
    initialState ,
    reducers :{

    }
})

export const PriceRuduser = PriceSlice.reducer;