import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useParams, Navigate} from "react-router-dom"

// import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
import Login from './components/login/Login'
import Home from './components/home/home'
// import Footer from './components/Footer/Footer'

export const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [todos, setToDos] = useState([])
  let {toDoId} = useParams();

  

  // useEffect (() => {
  //   let unsub = auth.onAuthStateChanged((user) => {
  //     // console.log("authentication", user)
  //     setCurrentUser(user)
  //     setIsAuthReady(true)
  //     unsub()
  //   })
  // }, [])
  // console.log("currentUser", currentUser)

  // useEffect(() => {
  //   async function test() {
  //     const response = await fetch(`${BASE_URL}/user/${userId}/todos`)
  //     const data = await response.json()
  //     setToDos(data)
  //   }
  //   test()
  // }, [])
  // console.log("initial load of todos", todos)

  return (
    <>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Home  setCurrentUser={setCurrentUser} todos={todos}/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />}/>
      <Route path="/signup" element={<SignUp/>}/>
      {/* <Route path="/exhibits" element={<Exhibits currentUser={currentUser} exhibits={exhibits} setExhibits={setExhibits}/>} />
      <Route path="exhibits/:exhibitId" element={<ExhibitPages exhibitId={exhibitId} currentUser={currentUser} exhibits={exhibits} setExhibits={setExhibits}/>}/> */}
    </Routes>
    <Footer currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </>
  )
}
export default App
