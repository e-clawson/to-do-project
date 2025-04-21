import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useParams, Navigate} from "react-router-dom"

// import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
// import Login from './components/login/Login'
// import Home from './components/home/Home'
// import Footer from './components/Footer/Footer'
import Home from './pages/home/Home.jsx'
import SignInSignUp from './pages/signin/SignInSignUp'
import EmailVerify from './pages/verify/emailVerify'
import ResetPassword from './pages/reset/resetPassword'
import { ToastContainer } from 'react-toastify'

// export const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL

function App() {


  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignInSignUp/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}
export default App
