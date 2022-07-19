import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

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
