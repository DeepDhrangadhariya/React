import React,{useState,useEffect} from 'react'
import './Finance.css'

function Finance() {
    const [inValue,setInValue] = useState('')
    const [exValue,setExValue] = useState('')
    const [income,setIncome] = useState([])
    const [expense,setExpense] = useState([])
    useEffect(() => {
        const storedIncome = JSON.parse(localStorage.getItem("Income")) || []
        setIncome(storedIncome)
        const storedExpense = JSON.parse(localStorage.getItem("Expense")) || []
        setExpense(storedExpense)
    },[])
    function saveIncome(e)
    {
        e.preventDefault()
        let newIncome = {
            text:inValue
        }
        const updatedIncome = [...income,newIncome]
        if(newIncome.text !== "")
        {
            setIncome(updatedIncome)
            localStorage.setItem("Income",JSON.stringify(updatedIncome))
            setInValue('')
            // const incElement = document.getElementById("incss");
            // if (incElement)
            // {
            //     incElement.style.border = "2px solid black";
            // }
        }
        // else
        // {
        //     const incElement = document.getElementById("incss");
        //     if (incElement)
        //     {
        //         incElement.style.border = "2px solid red";
        //     }
        // }       
    }
    function saveExpense(e)
    {
        e.preventDefault()
        let newExpense = {
            text:exValue
        }
        const updatedExpense = [...expense,newExpense]
        if(newExpense.text !== "")
        {
            setExpense(updatedExpense)
            localStorage.setItem("Expense",JSON.stringify(updatedExpense))
            setExValue('')
            // const exElement = document.getElementById("excss");
            // if (exElement)
            // {
            //     exElement.style.border = "2px solid black";
            // }
        }
        // else
        // {
        //     const exElement = document.getElementById("excss");
        //     if (exElement)
        //     {
        //         exElement.style.border = "2px solid red";
        //     }
        // }
    }
    const totalIncome = income.reduce((acc, curr)=> acc + parseFloat(curr.text),0)
    const totalExpense = expense.reduce((acc, curr)=> acc + parseFloat(curr.text),0)
    const balance = totalIncome - totalExpense
    // if(balance < 0)
    // {
    //     document.getElementById("blnce").style.color = "red"
    // }
    // else if(balance > 0)
    // {
    //     document.getElementById("blnce").style.color= "green"
    // }

  return (
    <div className="container">
        <h1>Finance Manager</h1><hr/>
        <h1>Blance: $<span style={{ color: balance < 0 ? "red" : balance === 0 ? "black" : "green" }}>{balance}</span></h1>
        <div>
            <div className="income-container">
                <h1>Total_Income: $ +<span className="total income">{totalIncome}</span></h1>
                <form onSubmit={saveIncome}>
                    <label >Income</label>
                    <input 
                        type='text' 
                        placeholder='Enter Amount' 
                        value={inValue} 
                        onChange={(e)=>setInValue(e.target.value)} 
                        // id='incss'
                    /><br/>
                    <button type='submit'>Save</button>
                </form><br/>
                {
                    income.map((e,i)=>(
                        <div className="entry" key={i}>
                            <h1>$ +<span className="income">{e.text}</span></h1>
                        </div>
                    ))
                }
                
            </div>
            <div className="expense-container">
                <h1>Total_Expense: $ -<span className="total expense">{totalExpense}</span></h1>
                <form onSubmit={saveExpense}>
                    <label>Expense</label>
                    <input 
                        type='text'
                        placeholder='Enter Amount'
                        value={exValue}
                        onChange={(e)=>setExValue(e.target.value)}
                        // id='excss'
                    /><br/>
                    <button type='submit'>Save</button>
                </form><br/>
                {
                    expense.map((e,i)=>(
                        <div className="entry" key={i}>
                            <h1>$ -<span className="expense">{e.text}</span></h1>
                        </div>
                    ))
                }
            </div>
        </div>
        
    </div>
  )
}

export default Finance