import * as actionTypes from '../constants/actionsTypes';

export default function createCourse(course) {
  return{
    type: actionTypes.CREATE_COURSE,
    course
  };
}
