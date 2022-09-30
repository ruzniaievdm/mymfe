import * as api from './api';
import { enrolledCourseListActions as actions } from './slice';

const fetchEnrolledCourseList = () => async (dispatch) => {
  try {
    const courses = await api.getEnrolledCourseList()
    dispatch(actions.enrolledCourseListSuccess({courses}))
    
  } catch (error) {
    console.log(error)
  }
};

export default fetchEnrolledCourseList;
