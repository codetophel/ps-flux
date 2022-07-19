import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to='/'
      >
        Home
      </NavLink>
      {' | '}
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to='/courses'
      >
        Courses
      </NavLink>
      {' | '}
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to='/about'
      >
        About
      </NavLink>
    </nav>
  );
}

export default Header;
