import React from 'react'
import {assets} from '../assets/assets'

const navbar = () => {
  return (
    <div>
        <img src={assets.check_icon} alt="a green check icon in a circle" className='logo'></img>
        <button>Sign In</button>
    </div>
  )
};

export default navbar;