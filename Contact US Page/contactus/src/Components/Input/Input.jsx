import React from 'react'
import "./Input.css"
function Input({label,type,value,onChange}) {
  return (
    <div className='inputDiv'>
        <label className='label' htmlFor={label}>{label}</label>
        <input type={type} name={label} className="input" value={value} onChange={(e)=>{onChange(e.target.value)}}/>
    </div>
  )
}
function TextArea({label,rows,value,onChange}){
    return (
        <div className='inputDiv'>
        <label className='label' htmlFor={label}>{label}</label>
        <textarea name={label} className="textareainput" rows={rows} value={value} onChange={(e)=>{onChange(e.target.value)}}/>
    </div>
    )
}

export {Input,TextArea};