import React, { useReducer } from 'react'
import reducer from './Reducer'
import initialState from './InitialState'
import { DeFunc, inFunc } from './Actions'

function ProductPage() {
    const [state,dispatch] = useReducer(reducer, initialState)
    const handleIncrement = (id) => {
        dispatch(inFunc(id))
    }
    const handleDecrement = (id) => {
        dispatch(DeFunc(id))
    }
    const total = state.prices.reduce((sum,item)=> sum + item.value,0)
  return (
    <>
    <h1>Total : ${total}</h1>

<div className='main'>
    {
        state.prices.map(item=>(
            <div key={item.id} className='submain'>
                <h1>Product: {item.name}</h1>
                <img src={item.img} style={{width: '400px', height: '500px'}} />
                <h1>Price : ${item.price}</h1>
                <h2>Quantity : {item.quantity}</h2>
                <h1>Amout : {item.value}</h1>
                <button onClick={()=>handleIncrement(item.id)}>Increment</button>
                <button onClick={()=>handleDecrement(item.id)}>Decrement</button>
                {/* <hr/> */}
            </div>
        ))
    }
    
</div>
    </>
  )
}

export default ProductPage