import React,{useState} from 'react'
import ThemeContext from './ThemeContext'

function ThemeProvider({children}) {
    const [theme,setTheme] = useState('light')

    const toggle = () => {
        setTheme(previousTheme => previousTheme === 'light' ? 'dark' : 'light')
    }
  return (
    <ThemeContext.Provider value={{theme,toggle}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider