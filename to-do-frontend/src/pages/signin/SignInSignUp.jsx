import React, { useState } from 'react'
import './signInSignUp.css'
import {assets} from '../../assets/assets.js'

const SignInSignUp = () => {
    const [action, setAction] = useState("Sign Up")
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <>
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className ='underline'></div>
        </div>
        <div className='inputs'>
            {/* only ask for name when it is signup */}
            {action === 'Sign Up' && (
                  <div className='input'>
                  <img src={assets.person_icon} alt=""></img>
                  <input type ='text' placeholder='Full Name' required/>
              </div>
            )}
      
            <div className='input'>
                <img src={assets.email_icon} alt=""></img>
                <input type ='email' placeholder='Email Address' required/>
            </div>
            <div className='input'>
                <img src={assets.password_icon} alt=""></img>
                <input type ='password' placeholder='Password' required/>
            </div>
        </div>
        {action === "Sign In" ? <div className="forgot-password">Forgot Password? <span>click here</span></div> : <div></div>}
        {action === "Sign In" ? <div className="forgot-password">Don't have an account? <span onClick={() => {setAction("Sign Up")}}>Sign Up Here</span></div> : <div className='sign-in'><p>Already have an account?</p><span onClick={() => {setAction("Sign In")}}>Sign-In Here</span></div>}
        <div className='submit-container'>
            <button className='submit' onClick={() => {setAction("Sign Up")}}>{action}</button>
            {/* <button className={action === "Sign Up" ? "submit gray": "submit"} onClick={() => {setAction("Sign In")}}>Sign In</button> */}
        </div>
    </div>
    
    </>
  )
}

export default SignInSignUp;
