import React , {useContext}from 'react'
import ThemeContext from './ThemeContext'

function ThemeComponent() {
    const {theme} = useContext(ThemeContext)
  return (
    // <div style={{
    //     background : theme === 'light' ? 'white' : 'black',
    //     color : theme === 'light' ? 'black' : 'white',
    //     height : '100vh'
    // }}>
    <div className={`${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
    style={{height : '100vh'}}>
        <h1>{
                theme === 'light' ? 'This Is Light Theme' : 'This Is Dark Theme'
            }</h1>
    </div>
  )
}

export default ThemeComponent