import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddPost({add}) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e)
  {
    e.preventDefault()
    add(title,content)
    navigate('/')
  }

  return (
    <div>
      <h1>Add Post</h1><hr/>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label><br/>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/><br/><br/><br/>
        <label>Content:</label><br/>
        <textarea style={{width: '400px',height:'200px'}} value={content} onChange={(e)=>setContent(e.target.value)}/><br/><br/>
        <button type='submit' className='btn btn-success'>Add Post</button>
      </form><hr/>
      <Link to='/' className='btn btn-primary'>Back To Home</Link>
    </div>
  )
}

export default AddPost