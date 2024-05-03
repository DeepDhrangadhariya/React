import React,{Fragment,useState} from 'react'

function Form() {
    const [data,setData] = useState({
        username: "",
        number: "",
        age: "",
        email: "",
        password: ""

    })
    function handleInput(e) {
        const {name,value} = e.target

        setData({
            ...data,
            [name]:value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(data)
    }
  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
            <label>Enter Username:</label><br/>
            <input type='text' name='username' value={data.username} onChange={handleInput}/><br/><br/>
            <label>Enter Contact Number:</label><br/>
            <input type='text'name='number' value={data.number} onChange={handleInput}/><br/><br/>
            <label>Enter Age</label><br/>
            <input type='text' name='age' value={data.age} onChange={handleInput}/><br/><br/>
            <label>Enter Email</label><br/>
            <input type='text' name='email' value={data.email} onChange={handleInput}/><br/><br/>
            <label>Enter Password</label><br/>
            <input type='text' name='password' value={data.password} onChange={handleInput}/><br/><br/>
            <button type='submit'>Sign Up Here</button>
        </form>
    </Fragment>
  )
}

export default Form