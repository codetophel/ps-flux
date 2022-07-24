import React, { useEffect, useState } from 'react';
import CourseList from './CourseList';
import courseStore from '../stores/courseStore';
import { loadCourse } from '../actions/courseActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses);

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourse();
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course'>
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CoursesPage;
