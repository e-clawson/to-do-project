import React from 'react'


const SignInSignUp = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'></div>
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
  )
}

export default SignInSignUp;
