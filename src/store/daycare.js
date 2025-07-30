import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    {

    id: 1,
    cost: "Cost per day",
    price: "350 AED",
  },
    {

    id: 1,
    cost: "Cost per month",
    price: "1200 AED",
  },
   
    
 ]
  

const costPriceSlice = createSlice({
    name:"Price-slice",
    initialState ,
    reducers :{

    }
})

export const costPriceSliceReduser = costPriceSlice.reducer;