import React from 'react'

function Produncts(props) {
  return (
    <div>
        <h1>Products: </h1>
        <div className='main'>
            {props.Produncts.map((p) => (
                <div key={p.id} className='sub'>
                    <h2>Product Id: {p.id}</h2>
                    <h1>Medicine Name: {p.name}</h1>
                    <h2>Quantity: {p.quantity}</h2>
                    <h3>Price: {p.price}</h3>
                    <h3>Expiry Year: {p.expiry}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Produncts