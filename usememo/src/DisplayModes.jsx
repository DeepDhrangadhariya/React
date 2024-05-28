import React, { useMemo, useState } from 'react'

function DisplayModes() {

    const [isDarkMode,setIsDarkMode] = useState(false)

    const theme = useMemo(() => {
        return {
            backgroundColor : isDarkMode ? "black" : "white",
            color : isDarkMode ? "white" : "black",
            btn : isDarkMode ? 'btn btn-outline-light' : 'btn btn-outline-dark',
            text : isDarkMode ? 'text-light' : 'text-dark',
            body : isDarkMode ? 'bg-dark' : "bg-light"
        }
    },[isDarkMode])

    // document.body.style.backgroundColor = theme.backgroundColor
    // document.body.style.color = theme.color

  return (
    <div className={theme.body} style={{height: '100vh'}}>
        <button className={theme.btn} onClick={()=>setIsDarkMode(!isDarkMode)}>Toggle Mode</button>
        <h1 className={theme.text}>Hello!!!!!</h1>
    </div>
  )
}

export default DisplayModes