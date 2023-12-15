import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import './Stucalender.css'
function Stucalender() {
    const [value,onChange]=useState(new Date())

    return (
       <div className="stucal1 ">
        <Calendar onChange={onChange} value={value}/>
       </div>
      );
}

export default Stucalender
