import logo from './logo.svg';
import './App.css';
import Blog from './Blog'

function App() {

  const books = [
    {id:1, title:"You are the Best Friend", img:"https://m.media-amazon.com/images/I/81HquwFEPgL._SY466_.jpg", author:"Ajay K Pandey", price:17},
    {id:2, title:"All I Ever Want Is You", img:"https://m.media-amazon.com/images/I/91yY1RAffgL._SY466_.jpg", author:"Nikhil Raj", price:39},
    {id:3, title:"IKIGAI", img:"https://m.media-amazon.com/images/I/61uUy0xfmJL._SY466_.jpg", author:"ANA HUANG", price:29},
    {id:4, title:"Atomic Habits", img:"https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg", author:"James Clear", price:34},
    {id:5, title:"Sherlock Holmes", img:"https://m.media-amazon.com/images/I/513-sDRdxsL._SY466_.jpg", author:"Arthur Conan Doyle", price:22},
    {id:6, title:"48 laws of power", img:"https://m.media-amazon.com/images/I/31RW8HQ31WL._SY445_SX342_.jpg", author:"Robert Greene", price:49}
  ]
  
  return (
    <div className="App">
      <Blog Books={books} Que="Quantity"/>
    </div>
  );
}

export default App;
