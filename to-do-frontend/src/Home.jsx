import React from 'react'
import Create from './Create'

function Home() {
    const [todos, setToDos] = useState([])
  return (
    <div>
        <h2>To-Do List: </h2>
        <h3>You Got This!</h3>
        <Create />
        { 
            todos.map(todo => 
            (
                <div>
                    {todo}
                </div>
            ))
        }
    </div>
  )
}

export default Home