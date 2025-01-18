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
    hora:false,
  });

  const[form,setForm]=useState(true)

  const handleOnChangeName=(e)=>{
    const newClient={...client,[e.target.name]:e.target.value};
    let validName=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if(validName.test(newClient.nombre)){
      setClient(newClient);
      setValid({...valid,
                nombre:true});
    }else{
      setValid({...valid,
                nombre:false});
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
  const handleOnChangeMotive=(e)=>{
    const newClient={...client,[e.target.name]:e.target.value}
    if(5>(newClient.motivo.length)<120){
      setClient(newClient);
      setValid({...valid,
                motivo:true});
    } else{
      setValid({...valid,
                motivo:false});
    };
  };
  const handleOnChangeTimeDate=(e)=>{
    setValid({...valid,
      fecha:e,
      hora:e
    });
  };
  const handleOnValidForm=()=>{
      if(valid.nombre===true&&
        valid.email===true&&
        valid.motivo===true&&
        valid.fecha===true&&
        valid.hora===true
        ){
        setForm(false)
      }else{
        setForm(true)
      }
  };

  return (
    <div className='DateForm'>
      <h2> Formulario para agendar Cita</h2>
      <form className='DoDate' onChange={handleOnValidForm} >
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
              name='motivo' 
              className='input Motive' 
              id='inputMotive'
              minLength={5}
              maxLength={120}
              autocomplete="off"
              onChange={handleOnChangeMotive}
              required
              />
          </div>
          <ClientDate weekend={weekend} interval={interval} initialTime={initialTime} finalTime={finalTime} handleOnChangeTimeDate={handleOnChangeTimeDate}/>
          <div>
            <input 
            className='buttonSubmit' 
            type="submit"
            disabled={form}
            />
          </div>
      </form>
    </div>
  )
}
