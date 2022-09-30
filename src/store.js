import { configureStore } from '@reduxjs/toolkit';
import { courseListReducer } from './components/courses-page'
import { enrolledCourseListReducer } from './components/dashboard-page'

export const buildStore = (overrides = {}) => configureStore({
  reducer: {
    ['course-list']: courseListReducer,
    ['enrolled-course-list']: enrolledCourseListReducer,
  },
  ...overrides,
});

const store = buildStore();

export default store;
