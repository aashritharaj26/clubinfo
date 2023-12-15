import React from 'react'
import './UpcomingEvents.css'
const UpcomingEvents = () => {
    return (
        <div className="container">
          <div className="event-calendar">
            <div className="head">
              <p className="top-line text-success">Upcoming Events for December 2023</p>
            </div>
            <div className="spacer"></div>
            <div className="event-list">
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">14<span className="month">January</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">CSI Recruitment</span>
                    <span className="description">Join us for Recruitment</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">16<span className="month">February</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">Turing Hut Coding Contest</span>
                    <span className="description">Coding Events</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">20<span className="month">March</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">Sintillations</span>
                    <span className="description">Non Technical Events of VNR VJIET</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">8<span className="month">March</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">ICPC Womens</span>
                    <span className="description">Coding contest for women</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      );
};


export default UpcomingEvents