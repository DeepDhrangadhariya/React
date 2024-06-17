import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';
import ManageProduct from './Components/ManageProduct';

function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {

    const firstProduct = JSON.parse(localStorage.getItem('HomeProducts')) || []
    setProducts(firstProduct)

  },[])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('CartProducts')) || []
    setCart(storedCart)
  },[])

  function addNewProduct(newProduct)
  {
    newProduct.id = Date.now()
    const addedProducts = [...products, newProduct]

    setProducts(addedProducts)
    localStorage.setItem('HomeProducts',JSON.stringify(addedProducts))
  }

  function deleteProducts(id)
  {
    const deletedProducts = products.filter(f => f.id !== id)
    setProducts(deletedProducts)
    localStorage.setItem('HomeProducts',JSON.stringify(deletedProducts))
  }

  function editProducts(id, title, price, image)
  {
    let editedProducts = products.map(p => (
      p.id === id ? {...p, title : title, price : price, image : image} : p
    ))
    setProducts(editedProducts)
    localStorage.setItem('HomeProducts',JSON.stringify(editedProducts))
  }

  function addToCart(product)
  {

    const existingProduct = cart.find(p=> p.id === product.id)

    // if(!existingProduct) {
    //   const newCart = [...cart,product]
    //   setCart(newCart)
    //   localStorage.setItem('CartProducts',JSON.stringify(newCart))
    // }

    if(existingProduct) {
      const updatedCart = cart.map(p => (
        p.id === product.id ? {...p, quantity : p.quantity + 1} : p
      ))
      setCart(updatedCart)
      localStorage.setItem('CartProducts',JSON.stringify(updatedCart))
    }
    else {
      const newCart = [...cart, {...product, quantity : 1}]
      setCart(newCart)
      localStorage.setItem('CartProducts',JSON.stringify(newCart))
    }

  }

  function updateCart(id, quantity)
  {

    const updatedCart = cart.map(p => (
      p.id === id ? {...p, quantity} : p
    ))

    setCart(updatedCart)
    localStorage.setItem('CartProducts',JSON.stringify(updatedCart))

  }

  function removeCart(id)
  {

    const updatedCart = cart.filter(f=> f.id !== id)

    setCart(updatedCart)
    localStorage.setItem('CartProducts',JSON.stringify(updatedCart))

  }

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home P={products} C={cart} addCart={addToCart} DP={deleteProducts} />} />
          <Route path='/AddProduct' element={<AddProduct addNew={addNewProduct} />} />
          <Route path='/EditProduct' element={<EditProduct P={products} EP={editProducts} />} />
          <Route path='/EditProduct/:id' element={<EditProduct P={products} EP={editProducts} />} />
          <Route path='/ManageProduct' element={<ManageProduct P={products} C={cart} addCart={addToCart} DP={deleteProducts} />} />
          <Route path='/Cart' element={<Cart C={cart} UC={updateCart} RC={removeCart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
