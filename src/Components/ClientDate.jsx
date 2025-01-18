import React from 'react'
import DatePicker from 'react-datepicker'
import {isWeekend} from 'date-fns'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import {useState} from 'react'

import "../Css Components/ClientForm.css"
import "react-datepicker/dist/react-datepicker.css"

export default function ClientDate({weekend, interval,initialTime, finalTime, handleOnChangeTimeDate}){
  const[selectedDate,SetSelectedDate]=useState(
    null
  );
  
  //Proceso de obtención de las fechas
  const date=new Date();
  const today=date.getDate();
  const month=date.getMonth();
  const year = date.getFullYear();
  const minDate=`"${year}-${month+1}-${today}"`;

  const handleOnChangeDate=(date)=>{
    SetSelectedDate(date);
    handleOnChangeTimeDate(true);
  };

  //Función para revisar si la fecha es fin de semana (weekend).
  const isWeekendDay=(date)=>{
    return isWeekend(date);
  };
  
  //Función para dejar fuera los fines de semana (weekend).
  const filterWeekends=(date)=>{
    return !isWeekendDay(date);
  };

  const horaInicial= initialTime.split(":");
  const horaFinal= finalTime.split(":");
  
  return (
    <div class="coolinput">
      <label for="datePicker" className='text'>Fecha y hora de consulta:</label>
      <DatePicker
        name="date"
        id='datePicker'
        className='input'
        autocomplete="off"
        placeholderText='15/January/2025  ||  12:59 PM'
        selected={selectedDate}
        onChange={handleOnChangeDate}
        dateFormat="dd/MMMM/YYYY  ||  hh:mm aa"
        minDate={minDate}
        filterDate={weekend==="false"?filterWeekends:!filterWeekends}
        showTimeSelect
        timeIntervals={interval}
        //crear funcion que ayude a la hora minima en caso de que las consultas duren mas de 60 min
        minTime={setHours(setMinutes(new Date(), horaInicial[1]-1),horaInicial[0] )}
        maxTime={setHours(setMinutes(new Date(), horaFinal[1]),horaFinal[0])}
      />
    </div>
  )
}
