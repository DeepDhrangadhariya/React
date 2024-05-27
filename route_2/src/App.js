import './App.css';
import React,{ useState,useEffect } from 'react';
import AddPost from './components/AddPost';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EditPost from './components/EditPost';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('DelPost')) || []
    setPosts(storedPosts)
  },[])
  function addNewPost(title,content)
  {
    let newPost = {
      id : new Date().getTime(),
      title : title,
      content : content
    }
    const addedPosts = [...posts, newPost]
    setPosts(addedPosts)
    localStorage.setItem('DelPost',JSON.stringify(addedPosts))
  }
  function deletePost(id)
  {
    const storedDelete = posts.filter(f=>f.id !== id)
    setPosts(storedDelete)
    localStorage.setItem('DelPost', JSON.stringify(storedDelete))
  }
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home P={posts} DP={deletePost}/>} />
          <Route path='/AddPost' element={<AddPost anp={addNewPost} />}/>
          <Route path='/EditPost' element={<EditPost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
