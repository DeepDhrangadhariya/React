import axios from 'axios'
import React, { useState } from 'react'

function AddData({refreshData}) {

        const [product, setProduct] = useState({
            title : '',
            price : ''
        })

        const handleChange = e => {
            setProduct({...product, [e.target.name] : e.target.value})
        }

        const handleSubmit = e => {
            e.preventDefault()
            axios.post('http://localhost:5000/Products', product)
            .then(res => {
                console.log(res)
                refreshData()
            })
            .catch(err => {
                console.log(err)
            })
        }

  return (
    <div>
        <h1>Add Data: </h1>
        <form onSubmit={handleSubmit}>
            Title : <input type='text' name='title' onChange={handleChange} value={product.title} /> <br /><br />
            Price : <input type='text' name='price' onChange={handleChange} value={product.price} /> <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddData