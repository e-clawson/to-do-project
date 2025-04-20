import React from 'react'
import './header.css'
import {assets} from '../../assets/assets'

const Header = () => {
  return (
    <div className='container'>
        <h1>To-Do App</h1>
        <img src={assets.check_list}></img>
        <h2>Organize Your Tasks!</h2>
    </div>
    
  )
}

export default Header