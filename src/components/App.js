import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // function getPage() {
  //   const route = window.location.pathname;
  //   if (route === '/courses') return <CoursesPage />;
  //   if (route === '/about') return <About />;
  //   return <HomePage />;
  // }

  return (
    <Router>
      <div className='container-fluid'>
        <ToastContainer autoClose={3000} hideProgressBar />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/course/:slug' element={<ManageCoursePage />} />
          <Route path='/course' element={<ManageCoursePage />} />
          <Route path='/about-page' element={<Navigate to='/about' />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
