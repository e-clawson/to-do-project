import React from 'react'
import './signInSignUp.css'

import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

const SignInSignUp = () => {
  return (
    <>
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div classname ='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={email_icon} alt=""></img>
                <input type ='email' />
            </div>
            <div className='input'>
                <img src={password_icon} alt=""></img>
                <input type ='password' />
            </div>
        </div>
    </div>
    <div className="forgotpassword">Forgot Password? <span>click here</span></div>
    <div className='submit-container'>
        <div className='submit'>Sign Up</div>
        <div className='submit'>Sign In</div>
    </div>
    </>
  )
}

export default SignInSignUp;
