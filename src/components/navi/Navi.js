import React from 'react'
import { Link } from 'react-router-dom'
function Navi() {
  return (
    <div>
<ul className="nav justify-content-center  w-100">
<li className="nav-item">
    {/* link to home */}
    <Link className="nav-link "  to="">On Going Contests</Link>
  </li>
<li className="nav-item">
  <Link className="nav-link " to="upcoming">Upcoming Contests</Link>
  </li>

  <li className="nav-item">
    {/* link toregister */}
    <Link className="nav-link "  to="stucalender">Calender</Link>
  </li>
  <li className="nav-item">
    {/* link to Login */}
    <Link className="nav-link "  to="clubs">Clubs</Link>
  </li>
  {/* link to Login */}
 
</ul>
    </div>
  )
}

export default Navi