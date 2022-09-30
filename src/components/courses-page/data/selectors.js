import { createSelector } from 'reselect';

const stateSelector = state => ({ ...state['course-list'] });

const selectCourseList = createSelector(
  stateSelector,
  (state) => ({
    ...state,
    courses: {
      ...state.courses,
    },
  }),
);

export default selectCourseList;
