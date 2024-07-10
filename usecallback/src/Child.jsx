import React, { memo } from 'react'

function Child({CC,CI,CD}) {
    console.log("child")
  return (
    <div>
        <h1>Child Counter: {CC}</h1>
        <button onClick={CI}>Increment</button>
        <button onClick={CD}>Decrement</button>
    </div>
  )
}

export default memo(Child)