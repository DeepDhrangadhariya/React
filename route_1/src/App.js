import './App.css';
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import AddPost from './AddPost';
import EditPost from './EditPost';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("Posts")) || []
    setPosts(storedPosts)
  },[])
  function addnewPost(title,content)
  {
    let newPost = {
      id : new Date().getTime(),
      title : title,
      content : content
    }
    const addedPosts = [...posts, newPost]
    setPosts(addedPosts)
    localStorage.setItem("Posts",JSON.stringify(addedPosts))
  }
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home P={posts} />} />
          <Route path='/AddPost' element={<AddPost ANP={addnewPost} />}/>
          <Route path='/EditPost' element={<EditPost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
