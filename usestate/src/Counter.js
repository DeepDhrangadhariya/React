import React from 'react'
import { useState } from 'react'

function Counter(props) {
    const [count,setCount] = useState(0)
    function increment()
    {
        setCount(count + 1)
    }
    function decrement()
    {
        if(count ==0)
        {
            setCount(0)
        }
        else
        {
            setCount(count - 1)
        }
        
    }
    function reset()
    {
        setCount(0)
    }
  return (
    <div>
        <h3>{props.que} : {count}</h3>
        <button onClick={increment}>Plus</button> &nbsp;&nbsp;
        <button onClick={decrement}>Minus</button> &nbsp;&nbsp;
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter