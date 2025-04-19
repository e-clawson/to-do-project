import React, { useState } from 'react'
import './signInSignUp.css'

import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

const SignInSignUp = () => {
    const [action, setAction] = useState("Sign Up")
  return (
    <>
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className ='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={email_icon} alt=""></img>
                <input type ='email' placeholder='Email Address'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=""></img>
                <input type ='password' placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>click here</span></div>
        <div className='submit-container'>
            <div className={action === "Sign In" ? "submit gray": "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray": "submit"} onClick={() => {setAction("Sign In")}}>Sign In</div>
        </div>
    </div>
    
    </>
  )
}

export default SignInSignUp;
