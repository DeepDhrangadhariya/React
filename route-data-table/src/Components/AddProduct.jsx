import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddProduct({addNew}) {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const navigate = useNavigate()

  function handleSubmit(e)
  {
    e.preventDefault()
    const newProduct = {title, price, image}
    addNew(newProduct)
    navigate('/')
  }

  function handleImage(e)
  {
    const imgURL = URL.createObjectURL(e.target.files[0])
    setImage(imgURL)
  }

  return (
    <div >
      <h1>Add Product</h1><hr />

    <form onSubmit={handleSubmit}>

      <label>Title:</label><br />
      <input type='text' value={title} onChange={e =>setTitle(e.target.value)} /> <br /><br /><br />

      <label>Price:</label><br />
      <input type='text' value={price} onChange={e => setPrice(e.target.value)}/> <br /><br /><br />

      <label>Image:</label><br />
      <input type='file' onChange={handleImage}/><br /><br /><br />

      <button type='submit' className='btn btn-success'>Add Product</button>

    </form><hr />

    <Link to='/' className='btn btn-dark'>Back To Home</Link>

    </div>
  )
}

export default AddProduct