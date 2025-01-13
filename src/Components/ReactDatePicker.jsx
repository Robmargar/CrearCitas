import React from 'react'
import { useState } from 'react'
import OnliTymePicker  from './OnliTymePicker'
import Weekend  from './Weekend'
import ClientForm from './ClientForm'

import "react-datepicker/dist/react-datepicker.css"
import "../Css Components/ReactDatePicker.css"

export const ReactDatePicker = () => {
  /*
  me tienn que pasar horario de inicio de consultas
  me tienen que pasar el horario de termino de consultas
  */
  const[dataForm,setDataForm]=useState({
    weekend:"false",
    initialTime:"0:00",
    finalTime:"0:00",
    intervals:5
  });
  
  const handleOnChangeITime=(time)=>{
    setDataForm({
      ...dataForm,
      initialTime:time
    });
    // console.log(dataForm.initialTime);
  };
  const handleOnChangeFTime=(time)=>{
    setDataForm({
      ...dataForm,
      finalTime:time
    });
    // console.log(dataForm.finalTime);
  };
  const handleOnChangeWeekend=(value)=>{
    setDataForm({
      ...dataForm,
      weekend:value
    });
  };
  const handleOnChangeIntervals=(inter)=>{
    setDataForm({
      ...dataForm,
      intervals:inter.target.value
    });
  };
  
  return (
    <article className='Container'>
    <form className='FormDashboard'>  
      <h2>Datos para crear Calendario</h2>
      <Weekend handleOnChange={handleOnChangeWeekend}/>
      <div className='Consult'>
        <h4>Tiempo de consulta (Minutos)</h4>
        <input type="number" onChange={handleOnChangeIntervals} />
      </div>
      <div className='Consult'>
      <h4>Hora Inicio</h4>
      <OnliTymePicker interval={dataForm.intervals} handleOnChange={handleOnChangeITime}/>
      </div >
      <div className='Consult'>
      <h4>Hora Final</h4>
      <OnliTymePicker interval={dataForm.intervals} handleOnChange={handleOnChangeFTime}/>
      </div>
      <input type="submit" className='buttonSubmit' name="Generar Horario" id="ButtonForm" />
    </form>

    <ClientForm weekend={dataForm.weekend} interval={dataForm.intervals} initialTime={dataForm.initialTime} finalTime={dataForm.finalTime}/>
    </article>
  )
}
