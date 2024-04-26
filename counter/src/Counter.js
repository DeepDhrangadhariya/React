import React from 'react'
import { useState } from 'react'

function Counter(props) {
    const [gain , setGain] = useState(0)
    function credit()
    {
        setGain(gain + 1)
    }
    function debit()
    {
        if(gain == 0)
        {
            setGain(0)
        }
        else
        {
            setGain(gain - 1)
        }
    }
  return (
    <div>
        <h1>{props.Name} : {gain}</h1>
        <button onClick={credit}> Earn </button>
        <button onClick={debit}> Pay </button>
    </div>
  )
}

export default Counter