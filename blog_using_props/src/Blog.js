import React, { useState } from 'react'

function Blog(props) {
  const [que,setQue] = useState(1)
  function plus()
  {
    setQue(que + 1)
  }
  function minus()
  {
    if(que == 1)
    {
      setQue(1)
    }
    else
    {
      setQue(que - 1)
    }
  }
  function reset()
  {
    setQue(1)
  }
  return (
    <div className='main'>
        {
            props.Books.map((b)=>(
                <div key={b.id} className='subdiv'>
                    <img src={b.img}/>
                    <h1>{b.title}</h1>
                    <h3>Author: {b.author}</h3>
                    <h2>$ {b.price}</h2>
                    <h2>{props.Que} : {que} &nbsp; &nbsp; <button onClick={plus}>+</button>
                    <button onClick={minus}>-</button> <button onClick={reset}>Reset</button></h2>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Blog