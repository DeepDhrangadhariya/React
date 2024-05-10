import React,{useState} from 'react'

function Todo() {
    const [value, setValue] = useState('')
    const [tasks,setTasks] = useState([])
    localStorage.setItem("Task",JSON.stringify(tasks))
    function addToList()
    {
        let newTask = {
            task:value
        }
        setTasks([...tasks,newTask])
        setValue('')
    }
  return (
    <div>
        <h1>ToDo Task</h1><hr/>
        <input
        type='text'
        placeholder='Enter Task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />&nbsp;
        <button onClick={addToList}>Add Task</button>
        {
            tasks.map((t,i)=>(
                <h1 key={i}>{t.task}</h1>
            ))
        }
    </div>
  )
}

export default Todo