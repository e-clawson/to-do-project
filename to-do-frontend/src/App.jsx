import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useParams, Navigate} from "react-router-dom"

// import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
// import Login from './components/login/Login'
// import Home from './components/home/Home'
// import Footer from './components/Footer/Footer'
import SignInSignUp from './components/login/SignInSignUp'

// export const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL

function App() {


  return (
    <>
      <SignInSignUp />
    </>
  )
}
export default App
