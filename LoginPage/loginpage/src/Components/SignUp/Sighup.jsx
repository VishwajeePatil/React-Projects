import React, { useState } from 'react'
import style from "./Signup.module.css"
import {Link} from "react-router-dom"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth,provider} from "../../firebase"
function Sighup() {
  const[errorMsg,seterrorMsg] = useState("");
  const [passtype,setpasstype] = useState(true);
    const [formdata,setformdata] = useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:""
    })
    let handelchange = (e)=>{
      seterrorMsg("")
       const {value,name,type} = e.target;
       setformdata({...formdata,[name]:value})
    }
    const handelsubmit = (event)=>{
      event.preventDefault();
      if(formdata.password !== formdata.confirmpassword){
        seterrorMsg("Confirm Passsword Must Be Same With Password");
      }else{
        uploadsighupdata();
      }
      console.log(formdata);
      
    }
    const changepasstype = ()=>{
      setpasstype(!passtype);
    }
     const uploadsighupdata = async ()=>{
        try {
          let response = await createUserWithEmailAndPassword(auth,formdata.email,formdata.password,formdata.name);
          console.log(response);
        } catch (error) {
          console.log(error);
          alert(error.code);
          if(error.code === "auth/weak-password"){
            seterrorMsg("Your Password Is Too Weak");
          }
          else if(error.code === "auth/invalid-email"){
            seterrorMsg("Email Address Is Invalid");
          }
          else if(error.code === "auth/email-already-in-use"){
            seterrorMsg("Email Address Is Already In Use");
          }
        }
     }
    
    return (
      <div className={style.login}>
          <div className={style.parent}>
              <form action="" onSubmit={handelsubmit}>
              <p>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter Name' onChange={handelchange} value={formdata.name}required />
                </p>
                <p>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder='Enter Email' onChange={handelchange} value={formdata.email}required />
                </p>
                <p className={style.pass}>
              <label htmlFor="password">Password</label>
              <input type={passtype? "password" : "text"} name='password' placeholder='Enter Password' onChange={handelchange} value={formdata.password}required />
              <button className={style.passwordtypechange} onClick={changepasstype}><i class="fa-regular fa-eye"></i></button>
              </p>
                <p>
                <label htmlFor="confirmpassword"> Confirm Password</label>
                <input type="password" name='confirmpassword' placeholder='Enter Password Again' onChange={handelchange} value={formdata.confirmpassword}required />
                </p>
                <p className={style.errorMsg}>
                  {errorMsg}
                </p>
                <input type="submit" value="Signup" />
                <p className={style.loginfooter}>Already Have An Account ?? <Link to={"/"}>Login</Link></p>
              </form>
          </div>
      </div>
  )
}

export default Sighup