import React, { useContext } from 'react'
import './header.css'
import {assets} from '../../assets/assets'
import { AppContent } from '../context/AppContext'

const Header = () => {

  const {userData} = useContext(AppContent);

  return (
    <div className='container'>
        <img src={assets.check_list}></img>
        <h1>To-Do App</h1>
        <h2>Organize Your Tasks!</h2>
        <br></br>
        {userData ? <h2>Hello, {userData.name}</h2> : <div></div>}
    </div>
    
  )
}

export default Header