import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {

    const [count, setCount] = useState(0)
    const [childCount, setChildCount] = useState(0)

    const handleIncrement = useCallback(()=> {
        setCount(count + 1)
    },[count])

    const handleDecrement = useCallback(()=> {
        setCount(count - 1)
    },[count])

    const childIncrement = useCallback(()=> {
        setChildCount(childCount + 1)
    },[childCount])

    const childDecrement = useCallback(()=> {
        setChildCount(childCount - 1)
    },[childCount])



  return (
    <div>
        <h1>Parent Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <Child CC={childCount} CI={childIncrement} CD={childDecrement} />
    </div>
  )
}

export default Parent