import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Home from './components/Home'

export const BASE_URL = 'http://localhost:8080'

function App() {
  const [todos, setToDos] = useState([])
   //better to be an empty array than null cuz you cant do map on a null
   const [input, setInput] = useState('')

  useEffect(() => {
    async function test() {
      const response = await fetch(`${BASE_URL}/todos`)
      const data = await response.json()
      console.log(data)
      setToDos(data)
    }
    test()
  }, [])

  function handleChange(e){ 
    setInput(e.target.value)
  }

  async function handleSubmit(e){
    //stop the page refresh 
    e.preventDefault()
    //formet our data - this should match the schema 
    const todo = {
      text: input,
    }
    //make the request  - fetch 
    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'POST', 
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newToDo = await response.json()
    setToDos([...todos, newToDo])
    console.log(newToDo)
    setInput("")
  }

  return (
    <>
    <div>
      <Home />
    </div>
    </>
  )
}

export default App
