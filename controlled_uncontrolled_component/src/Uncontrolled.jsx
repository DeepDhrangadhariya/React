import React, {useState,useRef} from 'react'

function Uncontrolled() {
    const emailValue = useRef(null)
    const passValue = useRef(null)
    function handleChange(e)
    {
        e.preventDefault()
        alert(`Email: ${emailValue.current.value}\nPassword: ${passValue.current.value}`)
    }
  return (
    <div>
        <center>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={handleChange}>
                <label>Enter Email</label><br/>
                <input type='text' ref={emailValue}></input><br/><br/>
                <label>Enter Password</label><br/>
                <input type='text' ref={passValue}></input><br/><br/>
                <button type='submit'>Login Here</button>
            </form>
        </center>
    </div>
  )
}

export default Uncontrolled