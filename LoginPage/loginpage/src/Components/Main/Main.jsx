import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from "../Login/Login"
import Sighup from '../SignUp/Sighup'
import style from "./Main.module.css"
function Main() {
  const [bgcolor,setbgcolor] = useState(true);
  const[successpopup,setsuccesspopup] = useState(true);
  const handelbgchange= ()=>{
    setbgcolor(!bgcolor);
  }
  const changepopupstate = ()=>{
    setsuccesspopup(!successpopup);
  }
  return (
    <div>

    <div className={style.parent}>
     
       <div className="container">
        <div className={style.child}>
          <div className={style.firsthalf}>
              <div className={bgcolor? style.heading : ""}>
                <Link to={"/"} onClick={handelbgchange} >Login</Link>
              </div>
              <div className={bgcolor? "" : style.heading}>
              <Link to={"/signup"} onClick={handelbgchange}>SignUp</Link>
              </div>
          </div>
          <div className={style.secondhalf}>
              <Routes>
                <Route path='/' element={<Login fun={changepopupstate}/>}/>
                <Route path='/signup' element={<Sighup/>}/>
              </Routes>
          </div>
        </div>
        <div className={`circle ${style.c1}`}></div>
        <div className={`circle ${style.c2}`}></div>
       </div>
    </div>
       {successpopup? <div className={style.popupparent}>
        <div className={style.popupchild}>
            <p>Login SuccussFully </p>
            <button onClick={()=>setsuccesspopup(false)}>Ok</button>
        </div>
      </div> : ""}
    </div>
  )
}

export default Main