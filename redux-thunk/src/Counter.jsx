import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deFunc, inFunc } from './store'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count)
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle('dark-mode')
    }

    return (
        <div className="counter-container">
            <h1 className="counter-header">Counter : {count}</h1>
            <div className="button-container">
                <button className="counter-button" onClick={() => dispatch(inFunc())}> + </button>
                <button className="counter-button" onClick={() => dispatch(deFunc())}> - </button>
            </div>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default Counter
