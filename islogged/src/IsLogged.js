import React from 'react'
import { useState } from 'react'

function IsLogged() {
    const [logged, setlogged] = useState(false)
    function forLogIn()
    {
        setlogged(true)
    }
    function forLogOut()
    {
        setlogged(false)
    }
  return (
    <div>
        {
            logged ?
            (
                <>
                    <h1>Welcome To Our Website</h1>
                    <button onClick={forLogOut}> Log Out </button>
                </>
            ) :
            (
                <>
                    <h1>Please Login : </h1>
                    <button onClick={forLogIn}> Log In </button>
                </>
            )
        }
    </div>
  )
}

export default IsLogged