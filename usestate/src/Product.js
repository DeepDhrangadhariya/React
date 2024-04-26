import React from 'react'
import { useState } from 'react'

function Product(props) {
  return (
    <div>
        <img className='productImg' src={props.img}/>
        <h1>{props.heading}</h1>
    </div>
  )
}

export default Product