/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  courses: {
    data: [],
    count: 0,
  },
};

const slice = createSlice({
  name: "course-list",
  initialState,
  reducers: {
    courseListSuccess: (state, { payload }) => {
      state.courses = payload.courses;
    },
  }
});

export const courseListActions = slice.actions;
export const courseListReducer = slice.reducer;
