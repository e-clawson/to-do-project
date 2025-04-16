import React from 'react'
import Create from './Create'
import { useState } from 'react'

function Home({todos, setTodos}) {
  return (
    <div>
        <h2>To-Do List: </h2>
        <h3>You Got This!</h3>
        <Create />
        { 
            todos.length === 0 
            ? 
            <div><h2>No Tasks!</h2></div> 
            :
            todos.map(todo => 
            (
                <div>
                    {todo.text}
                </div>
            ))
        }
    </div>
  )
}

export default Home