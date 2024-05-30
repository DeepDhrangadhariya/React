import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddPost from './Components/AddPost';
import EditPost from './Components/EditPost';
import { useEffect, useState } from 'react';

function App() {

  const [posts,setPosts] = useState([])

  useEffect(() => {
    const beingPosts = JSON.parse(localStorage.getItem('EditPost')) || []
    setPosts(beingPosts)
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

    localStorage.setItem('EditPost',JSON.stringify(addedPosts))
  }

  function delPosts(id)
  {
    const deletedPosts = posts.filter(f=>f.id !== id)
    setPosts(deletedPosts)
    localStorage.setItem('EditPost',JSON.stringify(deletedPosts))
  }

  function edPosts(id,title,content)
  {
    let updatedPosts = posts.map((p)=>(
      p.id === id ? {...p, title : title, content : content } : p
    ))
    setPosts(updatedPosts)
    localStorage.setItem("EditPost",JSON.stringify(updatedPosts))
  }

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home P={posts} DP={delPosts} />}/>
          <Route path='/AddPost' element={<AddPost add={addNewPost}/>}/>
          <Route path='/EditPost/:id' element={<EditPost EP={edPosts} P={posts} />}/>
          <Route path='/EditPost/' element={<EditPost EP={edPosts} P={posts} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
