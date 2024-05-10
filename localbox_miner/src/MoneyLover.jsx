import React,{useState} from 'react'

function MoneyLover() {
    const [value, setValue] = useState('')
    const [entries, setEntries] = useState([])
    const [editId, setEditId] = useState(null)
    localStorage.setItem("Entry",JSON.stringify(entries))
    function addMoney(){
        if(editId != null)
        {
            setEntries(entries.map(m=>{
                if(m.id === editId)
                {
                    return {...m, money : value}
                }
                return m
            }))
            setEditId(null)
            setValue('')
        }
        else
        {
            let newEntry = {
                id : new Date().getTime(),
                money : value
            }
            setEntries([...entries, newEntry])
            setValue('')
        }        
    }
    function deleteMoney(id)
    {
        setEntries(entries.filter((m)=>(
            m.id != id
        )))
    }
    function editMoney(id)
    {
        const moneyEdit = entries.find(m => m.id == id)
        setValue(moneyEdit.money)
        setEditId(id)
    }
  return (
    <div>
        <h1>Money Lover</h1><hr/>
        <input type='text' placeholder='Enter Your Expense' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={addMoney}>Add Entry</button>
        {
            entries.map((e,i)=>(
                <div key={i}>
                    <h1>$ -<span style={{color:"red"}}>{e.money}</span></h1>
                    <button onClick={()=>deleteMoney(e.id)}>Delete</button> &nbsp;&nbsp;
                    <button onClick={()=>editMoney(e.id)}>Edit</button>
                </div>
            ))
        }
        
    </div>
  )
}

export default MoneyLover