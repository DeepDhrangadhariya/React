import React,{useEffect, useState} from 'react'

function Todo() {
    const [inValue,setInValue] = useState('')
    const [tasks, setTasks] = useState([])
    const [eId,setEid] = useState(null)

    useEffect(() => {
        const sotored = JSON.parse(localStorage.getItem("List")) || []
        setTasks(sotored)
    },[])

    function addTask()
    {
        if(eId !== null)
        {
            const storedEdited = tasks.map(t=>{
                if(t.id === eId)
                {
                    return{...t,text:inValue}
                }
                return t
            })
            setTasks(storedEdited)
            localStorage.setItem("List",JSON.stringify(storedEdited))
            setEid(null)
            setInValue('')
        }
        else
        {
            const newTask = {
                id : new Date().getTime(),
                text : inValue
            }
            const final = [...tasks, newTask]
            if(final.text !== '')
            {
                setTasks([...tasks, newTask])
                localStorage.setItem("List",JSON.stringify(final))
                setInValue('')
            }
        }
         
    }
    function deleteList(id)
    {
        setTasks(tasks.filter(f=> f.id !== id))
        const deletedTask = tasks.filter(f=> f.id !== id)
        localStorage.setItem("List",JSON.stringify(deletedTask))   
    }

    function editList(id)
    {
        const listEdit = tasks.find(t => t.id === id)
        setInValue(listEdit.text)
        setEid(id)
    }
  return (
    <div>
        <h1>ToDo List</h1><hr/>
        <form onSubmit={addTask}>
            <label htmlFor='input'>Enter Task</label>
            <input type="text" id='input' value={inValue} onChange={e=>setInValue(e.target.value)} />
            <button type='submit'>Add Task</button>
        </form>
        <hr/>
        <div>
            {
                tasks.map((t,i)=>(
                    <div key={t.id}>
                        <h1>{t.text}</h1>
                        <button onClick={()=>deleteList(t.id)}>Delete</button>
                        <button onClick={()=>editList(t.id)}>Edit</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default Todo