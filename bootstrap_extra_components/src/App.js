
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Products from './components/Products';
import Store from './components/Store';

function App() {
  return (
    <div>
      <Router>
        {/* Header */}

        <Header/>

        {/* Navbar */}

        <Navbar/>

        <Routes>
          {/* Home */}

          <Route path='/' element={<Home/>}/>

          {/* About */}

          <Route path='/about' element={<About/>}/>

          {/* Product */}
          
          <Route path='/products' element={<Products/>}/>

          {/* Store */}

          <Route path='/store' element={<Store/>}/>

        </Routes>

        {/* Footer */}

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
