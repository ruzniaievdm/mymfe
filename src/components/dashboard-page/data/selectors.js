import { createSelector } from 'reselect';

const stateSelector = state => ({ ...state['enrolled-course-list'] });

const selectEnrolledCourseList = createSelector(
  stateSelector,
  (state) => ({
    ...state,
    courses: {
      ...state.courses,
    },
  }),
);

export default selectEnrolledCourseList;
