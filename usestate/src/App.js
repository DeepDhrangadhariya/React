import Apple from './Apple-iPhone-15-Pro.jpg';
import './App.css';
import Product from "./Product"
import Counter from "./Counter"

function App() {
  return (
    <div className="App">
      <Product img={Apple} heading="Apple iPhone 15 Pro"/>
      <Counter que="Quantity"/>
    </div>
  );
}

export default App;
