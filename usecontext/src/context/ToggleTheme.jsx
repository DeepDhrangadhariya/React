import React,{useContext} from 'react'
import ThemeContext from './ThemeContext'

function ToggleTheme() {
    const {theme,toggle} = useContext(ThemeContext)
  return (
    <div className={`${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
        <button onClick={toggle} className={`btn ${theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}>
            Switch to {theme === 'light' ? 'dark' : 'light'}
        </button>
    </div>
  )
}

export default ToggleTheme