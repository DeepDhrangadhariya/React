import React from 'react'
import { Link } from 'react-router-dom'

function Cart({C,UC,RC}) {

  function handleIncrease(id)
  {
    const value = C.find(v => v.id === id)
    UC(id, value.quantity + 1)
  }

  function handleDecrease(id)
  {
    const value = C.find(v => v.id === id)
    if (value.quantity > 1) {
      UC(id, value.quantity - 1)
    }
  }

  // function handleQuantity(id,quantity)
  // {
  //   if(quantity > 0) {
  //     UC(id,quantity)
  //   }
  // }

  return (
    <div className="cart-page">
      <h1>Cart Page</h1><hr />

      {
        C.map(e => (
          <div key={e.id} className="cart-item">

            <img src={e.image} alt='Img Not Found' style={{width : '400px', height : '500px'}} />
          <div className="item-details">
            <h3>{e.title}</h3>

            <h5>$ {e.price}</h5>
          </div>

            <div className="quantity-controls">
              <button onClick={() => handleDecrease(e.id)}>-</button>
              <span>{e.quantity}</span>
              <button onClick={() => handleIncrease(e.id)}>+</button>
            </div>

            {/* <input
              type='number'
              value={e.quantity}
              // min='1'
              onChange={(el)=> handleQuantity(e.id, parseInt(el.target.value))}
            /> */}

            <button className='btn btn-danger' onClick={() => RC(e.id)}>Del</button>

          </div>
        ))
      } <hr />

      <Link to='/' className='btn btn-dark'>Back To Home</Link>
    </div>
  )
}

export default Cart