import React from 'react'
import { Fragment,useState,useEffect,useRef } from 'react'

function Refer() {
    const [inputValue, setinputValue] = useState("")
    const count = useRef(0)
    useEffect(() => {
        count.current += 1
    })
  return (
    <Fragment>
        <input value={inputValue} onChange={(e)=> setinputValue(e.target.value)}></input>
        {console.log(inputValue)}
        <h1>Changes Count: {count.current}</h1>
    </Fragment>
  )
}

export default Refer