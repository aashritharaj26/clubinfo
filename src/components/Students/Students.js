import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Students() {
  return (
    <div className='w-100'>
      <h1>Students page</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          {/* link to home */}
          <Link className="nav-link" to="ongoing">
            On Going Contests
          </Link>
        </li>
        <li className="nav-item">
          {/* link to home */}
          <Link className="nav-link" to="upcoming">
            Upcoming Events
          </Link>
        </li>
        <li className="nav-item">
          {/* link to calendar */}
          <Link className="nav-link" to="stucalender">
            Calendar
          </Link>
        </li>
        <li className="nav-item">
          {/* link to clubs */}
          <Link className="nav-link" to="clubs">
            Clubs
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Students;