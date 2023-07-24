import "./Button.css";
import React from 'react'

function Button({text , icon, className}) {
  return (
    <button className={className}>
      {icon}{text}
    </button>
  )
}

export default Button