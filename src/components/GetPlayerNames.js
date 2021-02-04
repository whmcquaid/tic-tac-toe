import React from 'react'


 export default function GetPlayerNames({name, handleChange, name2, handleChange2}) {
 
    
   
    return (
      <div className='form-div'>
        <form className='form1'>
          <label htmlFor="name">Name: </label>
          <input value={name} onChange={handleChange} id="name" />
        </form>
        {name ? <strong>X : {name}</strong> : 'Please type your name'}
      
      <div>
        <form className='form2'>
          <label htmlFor="name2">Name: </label>
          <input value={name2} onChange={handleChange2} id="name2" />
        </form>
        {name2 ? <strong>O : {name2}</strong> : 'Please type your name'}
      </div>
    </div>
    )
  }