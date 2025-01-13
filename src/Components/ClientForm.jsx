import React from 'react'
import { useState } from 'react'
import ClientDate from './ClientDate'

import"../Css Components/ClientForm.css"

export default function ClientForm({weekend, interval,initialTime, finalTime}){
  const[client, setClient]=useState({
    nombre:"",
    email:"",
    motivo:"",
    fecha:"",
    hora:""
  });
  
  return (
    <div className='DateForm'>
      <h2> Formulario para agendar Cita</h2>
      <form className='DoDate'>
          <div className='coolinput'>
              <label for="input" className='text'>Nombre:</label>
              <input type="text" placeholder='Escribe tu Nombre...' name='input' className='input' />
          </div>
          <div className='coolinput'>
            <label for="mailInput" className='text'>Email:</label>
            <input type="email" placeholder='ejemplo@tucorreo.com...' name='mailInput' className='input' />        
          </div>
          <div className='coolinput'>
              <label for="inputMotive" className='text ' >Motivo de Consulta</label>
              <input type="text" placeholder='Escribe tus sintomas...' name='inputMotive' className='input Motive' />
          </div>
          <ClientDate weekend={weekend} interval={interval} initialTime={initialTime} finalTime={finalTime}/>
          <div>
            <input className='buttonSubmit' type="submit" />
          </div>
      </form>
    </div>
  )
}
