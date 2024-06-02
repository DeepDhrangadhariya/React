import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import { useEffect, useState } from 'react';

function App() {

  const [posts,setPosts] = useState([])

  useEffect(() => {
    const startPosts = JSON.parse(localStorage.getItem('SearchPost')) || []
    setPosts(startPosts)
  },[])

  function addNewPost(newPost)
  {
    newPost.id = Date.now()
    const addedPosts = [...posts, newPost]
    setPosts(addedPosts)
    localStorage.setItem('SearchPost',JSON.stringify(addedPosts))
  }

  function deletePosts(id)
  {
    const deletePosts = posts.filter(f => f.id !== id)
    setPosts(deletePosts)
    localStorage.setItem('SearchPost',JSON.stringify(deletePosts))
  }

  function editPosts(id,title,content,image)
  {
    let editedPosts = posts.map(p => (
      p.id === id ? {...p, title : title, content : content, image : image} : p
    ))
    setPosts(editedPosts)
    localStorage.setItem('SearchPost',JSON.stringify(editedPosts))
  }

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home P={posts} DP={deletePosts} />} />
          <Route path='/AddPost' element={<AddPost addNew={addNewPost} />} />
          <Route path='/EditPost' element={<EditPost P={posts} EP={editPosts} />} />
          <Route path='/EditPost/:id' element={<EditPost P={posts} EP={editPosts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
