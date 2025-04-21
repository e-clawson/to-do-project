import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';

const navbar = () => {
  const navigate = useNavigate(); 
  const {userData, BASE_URL, setUserData, setIsSignedIn} = useContext(AppContent)

  return (
    <div>
        <img src={assets.check_icon} alt="a green check icon in a circle" className='logo'></img>
        {userData?
        <div className='nav-user'>
          {userData.name[0].toUpperCase()}
        </div> 
        : <button className='button'>Sign In</button> }
    </div>
  )
};

export default navbar;