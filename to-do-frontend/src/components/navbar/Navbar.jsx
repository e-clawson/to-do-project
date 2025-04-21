import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';

const navbar = () => {
  const navigate = useNavigate(); 
  const {userData, BASE_URL, setUserData, setIsSignedIn} = useContext(AppContent)

  return (
    <div>
        <img src={assets.check_icon} alt="a green check icon in a circle" className='logo'></img>
        {userData?
        <div className='dropdown'>
          <button>{userData.name}</button>
          <div className='dropdown-content'> 
            <ul>
              <li>Verify Email</li>
              <li>Sign Out</li>
            </ul>
          </div>
        </div> 
        : <Link to='/signin'>Sign In</Link> }
    </div>
  )
};

export default navbar;