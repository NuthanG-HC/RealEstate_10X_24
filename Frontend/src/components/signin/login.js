import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './login.css'
const Login =()=>{
    
    return(
        <div className='box'>
             <div id="rectangle1">
                <h2>Logo</h2>
                <p id='title'>Enter your credentials to access your account</p>
                <input type='text' placeholder='User ID' name='id'  required/><br/>
                <input type='password' placeholder='Password'   /><br/>
                <button >Sign In</button><br/>
                <Link to="/register" >Sign Up</Link>
             </div>
             <p id="sub-head1">Don't have an account?<Link to="/register" >Sign Up</Link></p>
        </div>
    )
}


export default Login