import React from 'react'

import "../Css Components/Weekend.css"
export default function Weekend({handleOnChange}){

    const handleOnChangeWeekend=(e)=>{
        let value=e.target.value;
        handleOnChange(value);
    };

  return (
    <fieldset className='WeekendForm'>
    <legend>Laboras fines de Semana</legend>
    <div>
      <input type="radio" id="Si" name="weekend"  value="true" onChange={handleOnChangeWeekend} />
      <label htmlFor="Si">Si</label>
    </div>
    <div>
      <input type="radio" id="No" name="weekend" value="false" onChange={handleOnChangeWeekend} />
      <label htmlFor="No">No</label>
    </div>
  </fieldset>
  )
}
