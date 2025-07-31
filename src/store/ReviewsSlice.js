import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    {

    id: 1,
    photoUrl: "img-tem3.jpg",
    name: "Samuel Willson",
    comment: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
    describe :"Creative director in DD agency",
  },
     {

    id: 1,
    photoUrl: "img-tem1.jpg",
    name: "Alex Larkins",
    comment: "You can't connect the dots looking forward, you can only connect them looking backwards.",
    describe :" Founder of Pic Pen studio",
  },
    {

    id: 1,
    photoUrl: "img-tem2.jpg",
    name: "Natalia",
    comment: "Lola, I want to express my gratitude to the entire kindergarten staff. There is such a drastic difference between what children were like at the beginning of the year and how they have grown up now. Today was a very rich and interesting program. Complex numbers. We really liked it. Great concert. We got a real aesthetic pleasure. You did well.",
    describe :" Natalia, svyatoslav’s mother ",
  },
   
    
 ]
  

const ReviewsSlice = createSlice({
    name:"Price-slice",
    initialState ,
    reducers :{

    }
})

export const ReviewsSliceReduser = ReviewsSlice.reducer;