import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { useParams } from 'react-router-dom';

const CHANGE_EVENT = 'CHANGE';
let _courses = [];
let slug = useParams;

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getCourse() {
    return _courses;
  }

  getCourseBySlug() {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    default:
    //do  nothing
  }
});

export default store;
