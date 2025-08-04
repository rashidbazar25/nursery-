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
    lineeone: "6,050 ",
    linetow: "6,270 ",
    linethree: "6,425 ",
  },
    {
    id: 3,
    name: "YEAR",
    lineeone: "44,050 ",
    linetow: "46,270 ",
    linethree: "63,425 ",
  
  },
    
 ]
  

const PriceSlice = createSlice({
    name:"Price-slice",
    initialState ,
    reducers :{

    }
})

export const PriceRuduser = PriceSlice.reducer;