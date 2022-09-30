import * as api from './api';
import { courseListActions as actions } from './slice';

export const fetchCourseList = () => async (dispatch) => {
  try {
    const courses = await api.getCourseList()
    dispatch(actions.courseListSuccess({courses}))
    
  } catch (error) {
    console.log(error)
  }
};

export const postCourseEnrollment = async (courseId) => {
  try {
    await api.courseEnrollment(courseId)
  } catch (error) {
    console.log(error)
  }
};
