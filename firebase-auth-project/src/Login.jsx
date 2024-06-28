import React, { useState } from 'react'
import './Login.css'
import Home from './Home'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from './Config'

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [value, setValue] = useState("")

    const [formData, setFormData] = useState({
        email : '',
        password : ''
    })

    const [error, setError] = useState({})

    function handleInput(e)
    {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(formData)

        let errors = validate(formData)
        setError(errors)
        if(Object.keys(errors).length === 0){
            setIsLoggedIn(true)
        } else {
            setError(errors)
        }

    }

    function handleClick(e)
    {
        e.preventDefault()
        signInWithPopup(auth, provider)
        .then((data) => {
            setValue(data.user.email)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function validate(values)
    {
        let errors = {}
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        if(!regex.test(values.email)) {
            errors.email = 'Email is not valid'
        }
        if(!values.password){
            errors.password = 'Password Is Required'
        }
        else if(values.password.length < 8){
            errors.password = 'password must be more than 8 characters'
        }
        return errors
    }

    function handleOut()
    {
        setIsLoggedIn(false)
        signOut(auth)
        .then(() => {
            setValue("")
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        {
            (isLoggedIn || value) ? (
                <Home HO={handleOut} />
            ) : (
                <div className='main'>
                    <div className='submain'>
                        <div className='title_div'>
                            <h1>DG's App</h1>
                            <h2>Sign Into Your Account</h2>
                        </div>
                        <div className='form_div'>
                            <form onSubmit={handleSubmit}>
                                <input type='email' name='email' value={formData.email} onChange={handleInput} placeholder='Email Address' id='email'/>
                                <p>{error.email}</p>
                                <input type='password' name='password' value={formData.password} onChange={handleInput} placeholder='Password' id='password'/>
                                <p>{error.password}</p>
                                <button type='submit' id='login_btn'>Login</button>
                                <button onClick={handleClick} id='google_btn'>Continue With Google</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Login