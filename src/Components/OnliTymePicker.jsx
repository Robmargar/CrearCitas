import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

import "../Css Components/OnlyTimePicker.css"
import "react-datepicker/dist/react-datepicker.css"

export default function OnliTymePicker({interval, handleOnChange, name}) {
    const[Time,SetTime]=useState(0);
    
    const handleOnChangeTime=(time)=>{
       let resp= getTime(time);
       SetTime(resp);
       handleOnChange(resp);    
     };
     function getTime(time){
        let hour=time.getHours();
        let minutes=time.getMinutes();  
        let completeTime=minutes<10?`${hour}:0${minutes}`:`${hour}:${minutes}`;
        return completeTime
      };

  return (
          <DatePicker
            className='SelectDate'
            onChange={handleOnChangeTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={interval}
            dateFormat="hh:mm aa"
            value={Time}
            name={name}
            />
    )
}
