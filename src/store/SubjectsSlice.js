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
  name: "Subjects",
  initialState,
  reducers: {
    addSubject: (state, action) => {
      state.push(action.payload);
    },
    deleteSubject: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addSubject, deleteSubject } = subjectSlice.actions;
export const subjectSliceReduser = subjectSlice.reducer;