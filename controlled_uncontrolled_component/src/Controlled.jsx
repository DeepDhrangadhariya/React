import React from 'react'
import { useState } from 'react'

function Controlled() {
    const [nameValue, setNameValue] = useState("")
    const [ageValue, setAgeValue] = useState("")
    function handleSubmit(e)
    {
        e.preventDefault()
        alert(`Name: ${nameValue}\n\nAge: ${ageValue}`)
    }
  return (
    <div>
        <center>
            <h1>Controlled Form: </h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Name: </label><br/>
                <input type='text' value={nameValue}  onChange={(e)=> setNameValue(e.target.value)}></input><br/><br/>
                <label>Enter Your Age</label><br/>
                <input type='text' value={ageValue} onChange={(e) => setAgeValue(e.target.value)}></input><br/><br/>
                <button type='submit'>Submit Here</button>
            </form>
        </center>
    </div>
  )
}

export default Controlled