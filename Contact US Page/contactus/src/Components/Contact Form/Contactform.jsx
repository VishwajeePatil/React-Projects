import "./Contactform.css"
import React, { useState } from 'react'
import contactimage from "../../Assets/serviceBG.svg"
import Button from "../Button/Button";
import { MdMessage,MdCall,MdEmail } from 'react-icons/md';
import {MdOutlineSaveAlt} from "react-icons/md"

import {Input,TextArea} from "../Input/Input";
function Contactform() {
  const [inputValueName, setInputValueName] = useState('');
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [inputValueText, setInputValueText] = useState('');
  const handleInputName = (newValue) => {
    setInputValueName(newValue);
    console.log(inputValueName);
  };
  const handleInputEmail = (newValue) => {
    setInputValueEmail(newValue);
    console.log(inputValueEmail);
  };
  const handleInputText = (newValue) => {
    setInputValueText(newValue);
    console.log(inputValueText);
  };
  const handelSubmit= ()=>{

  }
  return (
    <div className="container flex contact-form">
      {/* First Half Containing Form */}
        <div className="form flex">
          <div className="formDiv flex">
          <div className="topButtons flex">
            <Button className="primary-button" text="Via Support Chat" icon={<MdMessage fontSize="24px"/>}/>
            <Button className="primary-button" text="Via Call" icon={<MdCall fontSize="24px"/>}/>
          </div>
          <Button className="secondary-button secBtn" text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/>
          <Input label="Name" type="text" placeHolder="" value={inputValueName} onChange={handleInputName}/>
          <Input label="E-mail" type="text" placeHolder="" value={inputValueEmail} onChange={handleInputEmail}/>
          {/* <Input label="Text" type="text" placeHolder="" value={inputValueText} onChange={handleInputText}/> */}
          <TextArea label="Text" value={inputValueText} onChange={handleInputText} rows={5}/>
          <Button className="primary-button submitbtn" text="Submit" icon={<MdOutlineSaveAlt fontSize="24px"/>} onClick={handelSubmit}/>
        </div>
          </div>
        {/* Second Half Containing Backgrounf Image */}
        <div className="contact-image">
            <img src={contactimage} alt="Contact Image" />
        </div>
    </div>
  )
}

export default Contactform