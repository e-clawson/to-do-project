import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Home from './Home'

export const BASE_URL = import.meta.env.VITE_BASE_URL

function App() {

  useEffect(() => {
    async function test() {
      const response = await fetch(`${BASE_URL}/todos`)
      const data = await response.json()
      console.log(data)
      setToDos(data)
    }
    test()
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
