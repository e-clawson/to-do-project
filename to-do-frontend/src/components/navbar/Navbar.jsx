import React from 'react'
import {assets} from '../../assets/assets'
import './navbar.css'

const navbar = () => {
  return (
    <div>
        <img src={assets.check_icon} alt="a green check icon in a circle" className='logo'></img>
        <button className='button'>Sign In</button>
    </div>
  )
};

export default navbar;