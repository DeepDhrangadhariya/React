import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditProduct({P,EP}) {

  const{id} = useParams()

  let product = P.find(p=> p.id === parseInt(id))

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if(product)
    {
      setTitle(product.title)
      setPrice(product.price)
      setImage(product.image)
    }
  },[product])

  function handleSubmit(e)
  {
    e.preventDefault()
    EP(product.id, title, price, image)
    navigate('/')
  }

  function handleImage(e)
  {
    const imgURL = URL.createObjectURL(e.target.files[0])
    setImage(imgURL)
  }

  return (
    <div>
      {
        product ? (
          <div>

            <h1>Edit Product</h1><hr />

            <form onSubmit={handleSubmit}>
              
              <label>Title:</label><br />
              <input type='text' value={title} onChange={e=>setTitle(e.target.value)}/> <br /><br /><br />

              <label>Price:</label><br />
              <input type='text' value={price} onChange={e=>setPrice(e.target.value)}/> <br /><br /><br />

              <label>Image:</label><br /><br />
              <input type='file'onChange={handleImage}/> <br /><br /><br />
              
              <button type='submit' className='btn btn-success'>Edit Product</button>

            </form><hr />

            <Link to='/' className='btn btn-dark'>Back To Home</Link>

          </div>
        ) : (
          <div>
                <br /><br />
                <h2 className='text-warning' >Alert!!</h2>
                <br /><hr /><br />
                <h1 className='text-danger' >***Go To Manage Products Page And Edit Any Product To Show This Page***</h1>
                <br /><hr /><br />
                <Link to='/ManageProduct' className='btn btn-dark' >Back To Manage Products</Link>
                <br /><br /><hr />
            </div>
        )
      }
    </div>
  )
}

export default EditProduct