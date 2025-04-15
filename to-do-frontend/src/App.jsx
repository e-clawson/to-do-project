import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Home from './Home'

export const BASE_URL = 'http://localhost:8080'

function App() {
  const [todos, setToDos] = useState([])

  useEffect(() => {
    async function test() {
      const response = await fetch(`${BASE_URL}/test`)
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
