import React,{useState} from 'react'

function Form() {
    const [data,setData] = useState({
        username:"",
        number:"",
        age:"",
        email:"",
        password:""
    })

    const [errors,setErrors] = useState({})

    function handleInput(e)
    {
      const{name,value} = e.target
      setData({
        ...data,
        [name]:value
      })
    }

    function handleSubmit(e)
    {
      e.preventDefault()
      console.log(data)
      let errors = validate(data)
      if(Object.keys(errors).length===0)
      {
        alert("Submitted")
      }
      else
      {
        setErrors(errors)
        console.log(errors)
      }
    }

    function validate(values)
    {
      let errors = {}
      // let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if(values.username === "")
      {
        errors.username="***Username Is Required***"
      }
      if(!regex.test(values.email))
      {
        errors.email="***Email Is Required***"
      }
      if(!values.number)
      {
        errors.number="***Number Is Required***"
      }
      if(!values.age)
      {
        errors.age="***Age Is Required***"
      }
      if(!values.password)
      {
        errors.password="***Password Is Required***"
      }
      else if(values.password.length < 8)
      {
        errors.password="***Minimum 8 Characters Are Required***"
      }
      return errors

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Enter Username:</label><br/>
        <input placeholder="Enter Username" type='text' name='username' value={data.username} onChange={handleInput}/><br/>
        <p style={{color:"red"}}>{errors.username}</p><br/><br/>

        <label>Enter Number:</label><br/>
        <input placeholder='Enter Number' type='text' name='number' value={data.number} onChange={handleInput}/><br/>
        <p style={{color:"red"}}>{errors.number}</p><br/><br/>

        <label>Enter Age</label><br/>
        <input placeholder='Enter Age' type='text' name='age' value={data.age} onChange={handleInput}/><br/>
        <p style={{color:"red"}}>{errors.age}</p><br/><br/>

        <label>Enter Email:</label><br/>
        <input  placeholder='Enter Email' type='text' name='email' value={data.email} onChange={handleInput}/><br/>
        <p style={{color:"red"}}>{errors.email}</p><br/><br/>

        <label>Enter Password:</label><br/>
        <input placeholder='Enter Password' type='password' name='password' value={data.password} onChange={handleInput}/><br/>
        <p style={{color:"red"}}>{errors.password}</p><br/><br/>
        
        <button type='submit'>Sign UP</button>

      </form>
    </div>
  )
}

export default Form