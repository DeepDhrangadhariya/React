import { signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { authed, provider } from './Config'
import Home from './Home'
import './SignInPage.css'

function SignInPage() {

    const [value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(authed, provider)
        .then((data) => {
            setValue(data.user.email)
            localStorage.setItem('AuthEmail', data.user.email)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        let userEmail = localStorage.getItem('AuthEmail')

        if(userEmail){
            setValue(userEmail)
        }
    },[])

  return (
    <div className="sign-in-container">
      {value ? (
        <Home />
      ) : (
        <button className="sign-in-button" onClick={handleClick}>
          Sign In With Google
        </button>
      )}
    </div>
  )
}

export default SignInPage