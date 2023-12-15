import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './Calendar.css'

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const eventDates = [
    '2023-12-01',
    '2023-12-05',
    '2023-12-10',
    '2023-12-15',
    '2023-12-20',
    '2023-12-25',
    '2023-12-28',
    '2023-12-31',
  ];
  const events = {
    '2023-12-01': 'GDSC',
    '2023-12-05': 'CSI',
    '2023-12-10': 'IEEE',
    '2023-12-15': 'ACM',
    '2023-12-20': 'NSS',
    '2023-12-25': 'Creative Arts',
    '2023-12-28': 'Scintillate',
    '2023-12-31': 'Dramatrix',
  };

  const tileContent = ({ date }) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');

    if (eventDates.includes(formattedDate)) {
      return (
        <div
          style={{
            backgroundColor: 'green', // Change color to your preference for event dates
            borderRadius: '50%',
            height: '20px',
            width: '20px',
           
          }}
          
        />
      );
    }

    return null;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div >
      <h1 className='mt-5'>Event Calendar</h1>
      <Calendar className="cal"
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={tileContent}
      />
      <div className='cont '>
        {eventDates.includes(moment(selectedDate).format('YYYY-MM-DD')) && (
          <div>
            <h2 className='mt-4'>Events on {moment(selectedDate).format('MMMM D, YYYY')}</h2>
            {/* Display event details or any other information here */}
            <p>{events[moment(selectedDate).format('YYYY-MM-DD')]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
