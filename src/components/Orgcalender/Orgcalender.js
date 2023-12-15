import React from 'react'
import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Orgcalender() {
    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (date) => {
      // Check if the date is already selected
      const isSelected = selectedDates.find((selectedDate) =>
        isSameDay(selectedDate, date)
      );
  
      // If the date is not selected, add it to the list
      if (!isSelected) {
        setSelectedDates([...selectedDates, date]);
      } else {
        // If the date is already selected, remove it from the list
        const updatedDates = selectedDates.filter(
          (selectedDate) => !isSameDay(selectedDate, date)
        );
        setSelectedDates(updatedDates);
      }
    };
  
    const isSameDay = (dateA, dateB) => {
      return (
        dateA.getDate() === dateB.getDate() &&
        dateA.getMonth() === dateB.getMonth() &&
        dateA.getFullYear() === dateB.getFullYear()
      );
    };
  
    return (
      <div>
        <h1>Event Calendar</h1>
        <Calendar onChange={handleDateChange} value={selectedDates} />
        <div>
          <h2>Selected Dates:</h2>
          <ul>
            {selectedDates.map((date, index) => (
              <li key={index}>{date.toDateString()}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Orgcalender


