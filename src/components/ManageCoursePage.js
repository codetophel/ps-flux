import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CourseForm from './CourseForm';
// import * as courseApi from '../api/courseApi';
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseActions';
import { toast } from 'react-toastify';

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    title: '',
    authorId: null,
    slug: '',
    category: '',
  });

  const { slug } = useParams();

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) {
      courseActions.loadCourse();
    } else if ({ slug }) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, slug]);

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = 'Title is required';
    if (!course.authorId) _errors.authorId = 'AuthorId is required';
    if (!course.category) _errors.category = 'category is required';

    setErrors(_errors);
    // form is valid if the error object has no properties
    return Object.keys(_errors).length === 0;
  }

  const history = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      history('/courses');
      toast.success('Course saved successfully');
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
