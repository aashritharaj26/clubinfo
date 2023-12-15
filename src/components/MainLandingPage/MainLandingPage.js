import React from 'react';
import './MainLandingPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function MainLandingPage() {
  let navigate = useNavigate();

  // Function to handle the click event for the Student Login button
 

  return (
    <div className='main text-center'>
      <div className="naviga">
        <p className='fs-3 text-light fw-bold '>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <img className='logovnr' src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" alt="" />
          &nbsp; &nbsp;
          Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)
        </p>
      </div>

      <div className="box">
        <div className="left">
          <div className="box2">
            <p className="fs-3">Student? </p>
            {/* Attach the handleStudentLogin function to the onClick event */}
         <Link to='students'><button className="btn btn-warning mb-3" >Student Login</button> </Link>
            <p className="fs-3">Event Organiser? </p>
            <Link to='org'><button className="btn btn-warning">Organiser Login</button></Link>
          </div>
        </div>
        <div className="right">
          <img className="pic" src="https://clipground.com/images/clubs-clipart-9.png" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default MainLandingPage;
