import React from 'react'
import Employee from './Employee'

function Login() {

  const [name, setName] = React.useState("")
  const [pw, setpw] = React.useState("")

  const [login,setLogin] = React.useState(false)

  function handleform(e){
    e.preventDefault()

    if(name.length === 0){
      alert("Enter Name")
    }
    else if(pw.length === 0){
      alert("Enter Password")
    }

    else if(name === "Deep" && pw === "deep123"){
      setpw(pw)
      setName(name)
      alert("Successfully")
      setLogin(true)
    }
    else {
      alert("Wrong Username Or Password")
    }

  }
  return (
    login ? (
    <>
      
      <Employee/>
      
    </>
    ) : (
      <>

    <div className="main">
        <form action="">
          <h4>Login Form</h4>
            <h1>Enter Email or Password</h1>
            <input type="text" placeholder='Username Is Deep' value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type="password" placeholder='Password Is deep123' value={pw} onChange={(e)=> setpw(e.target.value)}/>
            <button type='submit' onClick={handleform}>Submit</button>
          </form>
    </div>
    
    </>
      
    )
  )
}

export default Login