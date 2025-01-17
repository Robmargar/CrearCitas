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

  const[valid, setValid]=useState({
    nombre:false,
    email:false,
    motivo:false,
    fecha:false,
    hora:false
  });

  const handleOnChangeName=(e)=>{
    const newClient={...client,[e.target.name]:e.target.value};
    let validName=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if(validName.exec(newClient.nombre)){
      setClient(newClient);
      setValid({...valid,
                name:true});
    }else{
      setValid({...valid,
                name:false});
    };
  };

  const handleOnChangeMail=(e)=>{
    const newClient={...client,[e.target.name]:e.target.value}
    let validEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(validEmail.test(newClient.email)){
      setClient(newClient);
      setValid({...valid,
                email:true});
    } else{
      setValid({...valid,
                email:false});
    };
  };

  console.log(valid)
  return (
    <div className='DateForm'>
      <h2> Formulario para agendar Cita</h2>
      <form className='DoDate'>
          <div className='coolinput'>
              <label for="name" className='text'>Nombre:</label>
              <input 
              type="text" 
              placeholder='Escribe tu Nombre...' 
              name='nombre' 
              className='input' 
              id='name'
              minLength={5}
              maxLength={40}
              autocomplete="off"
              onChange={handleOnChangeName}
              />
          </div>
          <div className='coolinput'>
            <label for="mailInput" className='text'>Email:</label>
            <input 
            type="email" 
            placeholder='ejemplo@tucorreo.com...' 
            name='email' 
            className='input' 
            id='mailInput'
            autocomplete="off"
            onChange={handleOnChangeMail}
            />        
          </div>
          <div className='coolinput'>
              <label for="inputMotive" className='text ' >Motivo de Consulta</label>
              <textarea 
              placeholder='Describe tus sintomas'
              name='motive' 
              className='input Motive' 
              id='inputMotive'
              minLength={5}
              maxLength={120}
              autocomplete="off"
              required
              />
          </div>
          <ClientDate weekend={weekend} interval={interval} initialTime={initialTime} finalTime={finalTime}/>
          <div>
            <input className='buttonSubmit' type="submit" />
          </div>
      </form>
    </div>
  )
}
