import React from 'react'
import Navbar from '../../components/navbar';


const Home = () => {
  return (
    <div>
        < Navbar />
    </div>
  )
};

export default Home;

// import { useEffect, useState } from 'react'
// import CurrentUserContext from "./user-context.js"
// import './App.css'
// import Login from "./components/login/Login.js"


// export const BASE_URL = 'http://localhost:8080'

// function Home() {
//   const [currentUser, setCurrentUser] = useState(null) 
//   const [todos, setToDos] = useState([])
//    //better to be an empty array than null cuz you cant do map on a null
//    const [input, setInput] = useState('')

//   useEffect(() => {
//     async function test() {
//       const response = await fetch(`${BASE_URL}/user/${currentUser.id}`)
//       const data = await response.json()
//       console.log(data)
//       setToDos(data)
//     }
//     test()
//   }, [])

//   function handleChange(e){ 
//     setInput(e.target.value)
//   }

//   async function handleSubmit(e){
//     //stop the page refresh 
//     e.preventDefault()
//     //formet our data - this should match the schema 
//     const todo = {
//       text: input,
//     }
//     //make the request  - fetch 
//     const response = await fetch(`${BASE_URL}/todos`, {
//       method: 'POST', 
//       body: JSON.stringify(todo),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     const newToDo = await response.json()
//     setToDos([...todos, newToDo])
//     console.log(newToDo)
//     setInput("")
//   }

//   return (
//     <>
//     <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
//     {/* <Header /> */}
//     <>
//     {currentUser !== null ? (
//       <>
//       {/* <TaskCounter todos={todos}/> */}
//       <TaskDisplay todos={todos} setTodos={setToDos}/>
//       <Signout />
//       </>
//     ) : <Login />}
//     </>
//     </CurrentUserContext.Provider>
//     </>
//   )
// }
// export default Home;