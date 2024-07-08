import React, { useEffect, useState } from 'react'
import { database } from './ProductPage_Config'
import { onValue, ref, set } from 'firebase/database'

function ProductPage() {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [products, setProducts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const productRef = ref(database, `Products/${title}`)
        set(productRef, {title, image, price})
        setTitle("")
        setImage("")
        setPrice("")
    }

    useEffect(() => {
        const dataRef = ref(database, 'Products')
        onValue(dataRef, (el) => {
            const data = el.val()
            if(data){
                const dataList = Object.keys(data).map((key) => ({
                    title : key,
                    ...data[key]
                }))
                setProducts(dataList)
            } else {
                setProducts([])
            }
        })
    },[])

    return (
        <div>
            <div className="container">
                <h1>Product Management</h1>

                <div className="form-section">
                    <h2>Add New Product</h2>
                    <form id="product-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL:</label>
                            <input type="url" id="image" name="image" value={image} onChange={e => setImage(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="number" id="price" name="price" value={price} onChange={e => setPrice(e.target.value)} required />
                        </div>
                        <button type="submit">Add Product</button>
                    </form>
                </div>

                <div className="product-section">
                    <h2>Products</h2>
                    <div className="product-list" id="product-list">
                        {
                            products.map((p, index) => (
                                <div key={index} className="product-item">
                                    <img src={p.image} alt={p.title} />
                                    <h1>{p.title}</h1>
                                    <h3>Price: $ {p.price}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
