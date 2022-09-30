/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  courses: {
    data: [],
    count: 0,
  },
};

const slice = createSlice({
  name: "enrolled-course-list",
  initialState,
  reducers: {
    enrolledCourseListSuccess: (state, { payload }) => {
      state.courses = payload.courses;
    },
  }
});

export const enrolledCourseListActions = slice.actions;
export const enrolledCourseListReducer = slice.reducer;
