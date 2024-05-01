import React, { useState } from 'react'
import Produncts from './Produncts'

function Login(props) {
    const [login, setLogin] = useState(false)
    function handlein()
    {
        setLogin(true)
    }
    function handleout()
    {
        setLogin(false)
    }
  return (
    <div>
        {
            login ? (
                <div>
                    <center>
                        <button onClick={handleout}>Log Out</button>
                        <Produncts Produncts = {props.Product}/>
                    </center>
                </div>
            ) :
            (
                <div>
                    <center>
                        <h1>Please Login First</h1>
                        <form>
                            <input type='text' placeholder='Enter Email'></input><br></br>
                            <input type='text' placeholder='Enter Password'></input><br/><br/>
                            <button type="submit" onClick={handlein}>Log In</button>
                        </form>
                    </center>
                </div>
            )
        }
    </div>
  )
}

export default Login