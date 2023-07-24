import "./Navigation.css";
import React from 'react';
import logo from "../../Assets/logo.png";
function Navigation() {
  return (
    <nav className='container flex navbar'>
      <div className='logo'>
        <img src={logo} alt="LOGO" />
      </div>
      <ul className='flex navUL'>
        <li className="links">HOME</li>
        <li className="links">ABOUT</li>
        <li className="links">CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navigation