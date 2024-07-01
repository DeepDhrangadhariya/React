import { signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from './Config'
import LogoutPage from './LogoutPage'

function LoginPage() {

    const [isLoggedIn, setIsLoggedIn] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        signInWithPopup(auth,provider)
        .then((data) => {
            setIsLoggedIn(data.user.email)
            console.log(data.user)
            setEmail(data.user.displayName)
            setImage(data.user.photoURL)
        })
        .catch((err) => {
            console.log(err)
        })

        

    }

    function handleLogout() {
        signOut(auth)
        .then(() => {
            setIsLoggedIn('')
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        {
            isLoggedIn ? (
                <LogoutPage HO={handleLogout} Email={email} Image={image}/>
            ) : (
                <div className="login-container">
                    <div className="login-box">
                        <h2>Login to Your Account</h2>
                        <button className="login-button google-login" onClick={handleLogin}>Login With Google</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default LoginPage