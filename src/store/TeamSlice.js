import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    {

    id: 1,
    name: "Fatema",
    role: "2 - 3 Years",
    photoUrl: "img-tem1.jpg",
    Specialization: "Motor activities",
    experience: "2 Years",
    certifications:"Kindergarten",
  },

  {

    id: 1,
    name: "Ali",
    role: "3 - 4 Years",
    photoUrl: "img-tem2.jpg",
    Specialization: "Motor activities",
    experience: "4 Years",
    certifications:"Kindergarten",
  },
    

  {

    id: 1,
    name: "Rashid",
    role: "4 - 6 Years",
    photoUrl: "img-tem3.jpg",
    Specialization: "Motor activities",
    experience: "8 Years",
    certifications:"Kindergarten",
  },
    

  {

    id: 1,
    name: "Omer",
    role: "1 - 2 Years",
    photoUrl: "img-tem4.jpg",
    Specialization: "Motor activities",
    experience: "6 Years",
    certifications:"Kindergarten",
  },
    

    
 ]
  

const TeamSlice = createSlice({
    name:"Team-slice",
    initialState ,
    reducers :{

    }
})

export const TeamRuduser = TeamSlice.reducer;