import React from 'react'
import  { useState } from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
const Register =()=>{
   const  [data, setData] = useState({id:"",password:"",confirm_password:""})
   function handleSignIn(){
     fetch(`http://localhost:7001/`)
  
   }
    return(
        <div className='box'>
             <div id="rectangle">
                <h2>Logo</h2>
                <p id='title'>Create New Account</p>
                <input type='text' placeholder='Mail ID' value={data.id} onChange={(e)=>{setData({...data,id:e.target.value})}}/><br/>
                <input type='password' placeholder='Password' name='password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}   minLength={6}/><br/>
                <input type='password' placeholder='Confirm Password' name='confirm_password' value={data.confirm_password} onChange={(e)=>{setData({...data,confirm_password:e.target.value})}}/><br/>
                <Link to="/"><button  onClick={handleSignIn} >Sign up</button><br/></Link>
             </div>
             <Link id="sub-head" to="/" >Sign in</Link>
        </div>
    )
}


export default Register