import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home({P, /*{DP}*/ addCart, C}) {

    // function handleDelete(id)
    // {
    //     DP(id)
    // }

    const [search, setSearch] = useState('')
    const [sortOrder, setSortOrder] = useState('none')

    const filteredProducts = P.filter(f=>{
        return f.title.toLowerCase().includes(search.toLowerCase())
    })

    const sortedProducts = filteredProducts.sort((a, b) => {
        if(sortOrder === 'newest')
        {
            return b.id - a.id
        }
        else if(sortOrder === 'oldest')
        {
            return a.id - b.id
        }
        else if(sortOrder === 'title-ascending')
        {
            return a.title.localeCompare(b.title)
        }
        else if(sortOrder === 'title-descending')
        {
            return b.title.localeCompare(a.title)
        }
        else if(sortOrder === 'low=high')
        {
            return a.price - b.price
        }
        else if(sortOrder === 'high-low')
        {
            return b.price - a.price
        }
        else
        {
            return 0
        }
    })

  return (
    <div className="container">
        <h1>Home</h1><hr />

        <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Product'/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <select value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
            <option value='none' disabled hidden>Filter</option>
            <option value='newest'>Newest First</option>
            <option value='oldest'>Oldest First</option>
            <option value='title-asceding'>Title A-Z</option>
            <option value='title-descending'>Title Z-A</option>
            <option value='low-high'>Price Low To High</option>
            <option value='high-low'>Price High To Low</option>
        </select>
        
        <br /><br /><br />

        <div className="product-grid">

        {
            sortedProducts.map(e=>(
                <div key={e.id} className="product-card">

                    <img src={e.image} alt='Img Not Found' style={{width : '400px',height : '500px'}}/>

                    <h3>{e.title}</h3>

                    <h5>$ {e.price}</h5>

                    {/* <button className='btn btn-danger' onClick={()=>handleDelete(e.id)}>Delete</button> */}

                    {/* <Link to={`/EditProduct/${e.id}`}>
                        <button className='btn btn-warning'>Edit</button>
                    </Link> */}

                    {
                        C.some(c => c.id === e.id) ? (
                            <div>
                                <button onClick={() => addCart(e)} className='btn btn-primary already-in-cart' disabled>Already In Cart</button><br />
                                <Link to='/Cart' className='btn btn-info'>Go To Cart</Link>
                            </div>
                        ) : (
                            <div>
                                <button onClick={() => addCart(e)} className='btn btn-primary add-to-cart'>Add To Cart</button>
                            </div>
                        )
                    }

                    {/* <button className='btn btn-primary' onClick={()=>addCart(e)}>Add To Cart</button> */}

                </div>
            ))
        } 
        </div>
        <hr />

        <Link to='/AddProduct' className='btn btn-dark'>Add Product</Link>

    </div>
  )
}

export default Home