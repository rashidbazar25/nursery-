import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
  {
    id: 1,
    address: "subjects.numbers.address",
    paragraph: "subjects.numbers.paragraph",
    photoUrl: "Subjectsnum.png",
  },
  {
    id: 2,
    address: "subjects.reading.address",
    paragraph: "subjects.reading.paragraph",
    photoUrl: "Subjectsreading.png",
  },
  {
    id: 3,
    address: "subjects.arts.address",
    paragraph: "subjects.arts.paragraph",
    photoUrl: "Subjectscolor.png",
  },
  {
    id: 4,
    address: "subjects.world.address",
    paragraph: "subjects.world.paragraph",
    photoUrl: "Subjectsworld.png",
  },
];

  

const subjectSlice = createSlice({
    name:"Team-slice",
    initialState ,
    reducers :{

    }
})

export const subjectSliceReduser = subjectSlice.reducer;