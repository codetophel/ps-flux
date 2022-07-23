import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourse() {
  return courseApi.getCourses().then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      course: savedCourse,
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSES,
      course: savedCourse,
    });
  });
}
