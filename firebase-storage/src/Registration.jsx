import { ref, set } from 'firebase/database'
import React, { useState } from 'react'
import { database } from './Firebase_Config'

function Registration() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const userRef = ref(database, `users/${username}`)
        set(userRef, { username, email, password })
        setUsername("")
        setEmail("")
        setPassword("")
    }

  return (
    <div>
        <div className="container">
            <form className="glass-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                required 
                />

                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
                />

                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required 
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Registration