import React, { useState } from 'react'
import style from "./Login.module.css"
import {Link} from "react-router-dom"
import {signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import {auth,provider} from "../../firebase"
function Login({fun}) {
  const[errorMsg,seterrorMsg] = useState("");
  const [passtype,setpasstype] = useState(true);
  const [formdata,setformdata] = useState({
    email:"",
    password:""
  })
  let handelchange = (e)=>{
     const {value,name,type} = e.target;
     setformdata({...formdata,[name]:value})
     seterrorMsg("");
  }
  const handelsubmit = (event)=>{
    event.preventDefault();
    signinwithfirebase();
  }

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  let signinwithfirebase = async ()=>{
    try {
      let response = await signInWithEmailAndPassword(auth,formdata.email,formdata.password);
      console.log(response);
      fun();
    } catch (error) {
      console.log(error);
      if(error.code === "auth/wrong-password"){
        seterrorMsg("Your Password Is Incorrect");
      }
      else if(error.code === "auth/user-not-found"){
        seterrorMsg("User Not Found");
      }
    }
  }
  const changepasstype = ()=>{
    setpasstype(!passtype);
  }


  return (
    <div className={style.login}>
        <div className={style.parent}>
            <form action="" onSubmit={handelsubmit}>
              <p>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' placeholder='Enter Email' onChange={handelchange} value={formdata.email}required />
              </p>
              <p className={style.pass}>
              <label htmlFor="password">Password</label>
              <input type={passtype? "password" : "text"} name='password' placeholder='Enter Password' onChange={handelchange} value={formdata.password}required />
              <button className={style.passwordtypechange} onClick={changepasstype}><i class="fa-regular fa-eye"></i></button>
              </p>
              <p className={style.errorMsg}>
                  {errorMsg}
                </p>
              <input type="submit" value="Login" />
              <p className={style.loginfooter}>Don't Have An Account ?? <Link to={"/signup"}>SignUp</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login