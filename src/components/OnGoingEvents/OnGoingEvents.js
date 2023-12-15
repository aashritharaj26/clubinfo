import React from 'react'

function OnGoingEvents() {
    return (
        <div className="container">
          <div className="event-calendar">
            <div className="head">
              <p className="top-line text-success">Ongoing Events for December 2023</p>
            </div>
            <div className="spacer"></div>
            <div className="event-list">
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">16<span className="month">December</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">Ecficio</span>
                    <span className="description">Join us for Ecficio at 10am</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">25<span className="month">December</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">Christmas Party</span>
                    <span className="description">Join us for a party at 2:30pm</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">26<span className="month">December</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">Convergence</span>
                    <span className="description">Technical event of VNR VJIET</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
              <a href="#" className="event">
                <div className="event-container">
                  <span className="date-container">
                    <span className="date">29<span className="month">December</span></span>
                  </span>
                  <span className="detail-container">
                    <span className="title">NSS Recruitment</span>
                    <span className="description">Process of selecting action commitee</span>
                  </span>
                </div>
              </a>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      );
}

export default OnGoingEvents
