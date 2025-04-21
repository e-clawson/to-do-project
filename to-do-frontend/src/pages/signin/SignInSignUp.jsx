import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './signInSignUp.css'
import {assets} from '../../assets/assets.js'
import {toast} from 'react-toastify'; 
import { AppContent } from '../../components/context/AppContext.jsx';


const BASE_URL = import.meta.env.VITE_BASE_URL;

function SignInSignUp({setIsSignedIn, setUserData}) {

    const navigate = useNavigate();
    // const {setIsSignedIn, setUserData} = useContext(AppContent);

    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();

            if(state === 'Sign Up') {
                let user = {
                    name: name, 
                    email: email, 
                    password: password 
                }
                //api call to backend
                try {
                    const response = await fetch(`${BASE_URL}/auth/signin`, {
                        method: 'POST', 
                        body: JSON.stringify(user),
                        headers: {
                            'Content-Type': 'application/json'
                        }, 
                        credentials: "include"
                    });
                    const data = await response.json()
                    console.log(data)
                    setIsSignedIn(true)
                    setUserData(data)
                    navigate('/')
                } catch (error){
                    console.log(error)
                    toast.error(data)
                };
            }else{

                let user = {
                    email: email, 
                    password: password 
                };

                try {
                    const response = await fetch(`${BASE_URL}/auth/signin`, {
                        method: 'POST', 
                        body: JSON.stringify(user),
                        headers: {
                            'Content-Type': 'application/json'
                        }, 
                        credentials: "include"
                    });
                    const data = await response.json()
                    console.log(data);
                    setIsSignedIn(true);
                    setUserData(data);
                    navigate("/")
                }catch (error){
                    console.log(error)
                    toast.error(data.message)
                };
            };
        } catch(err){
            console.log(error)
            toast.error(data.message)
        }
    }

  return (
    <>
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className ='underline'></div>
        </div>
        <div className='inputs'>

            <form onSubmit={onSubmitHandler}>
            {/* only ask for name when it is signup */}
            {action === 'Sign Up' && (
                  <div className='input'>
                  <img src={assets.person_icon} alt=""></img>
                  <input 
                    onChange={(e)=> setName(e.target.value)} 
                    value={name} 
                    type='text' 
                    placeholder='Full Name' 
                    required
                    />
              </div>
            )}
      
            <div className='input'>
                <img src={assets.email_icon} alt=""></img>
                <input 
                    onChange={(e)=> setEmail(e.target.value)} 
                    value={email} 
                    type ='email' 
                    placeholder='Email Address' 
                    required/>
            </div>
            <div className='input'>
                <img src={assets.password_icon} alt=""></img>
                <input 
                    onChange={(e)=> setPassword(e.target.value)} 
                    value={password}
                    type ='password' 
                    placeholder='Password' 
                    required/>
            </div>
            </form>
        </div>
        {action === "Sign In" ? <div className="forgot-password">Forgot Password? <span onClick={() => navigate('/reset-password')}>click here</span></div> : <div></div>}
        {action === "Sign In" ? <div className="forgot-password">Don't have an account? <span onClick={() => {setAction("Sign Up")}}>Sign Up Here</span></div> : <div className='sign-in'><p>Already have an account?</p><span onClick={() => {setAction("Sign In")}}>Sign-In Here</span></div>}
        <div className='submit-container'>
            <button className='submit' onSubmit={onSubmitHandler}>{action}</button>
            {/* <button className={action === "Sign Up" ? "submit gray": "submit"} onClick={() => {setAction("Sign In")}}>Sign In</button> */}
        </div>
    </div>
    
    </>
  )
}

export default SignInSignUp;
