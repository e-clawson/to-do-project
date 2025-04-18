import React, { useState } from 'react'

function Create() {
  const [task, setTask] = useState()
  const handleAdd = () => {

  }
  return (
    <div>
        <input type="text" placeholder= "enter a task here" onChange={() => setTask(e.target.value)}/>
        <button type="button" onclick={handleAdd}>Add</button>
    </div>
  )
}

export default Create