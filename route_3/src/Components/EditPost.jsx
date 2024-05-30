import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditPost({EP,P}) {

  const{id} = useParams()

  let ans = P.find(post=> post.id === parseInt(id))

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if(ans)
    {
      setTitle(ans.title)
      setContent(ans.content) 
    }
  },[ans])

  function handleSubmit(e)
  {
    e.preventDefault()
    EP(ans.id,title,content)
    navigate('/')
  }

  return (
    <div>
      {ans ? (
        <div>
        <h1>Edit Page</h1><hr/>
  
        <form onSubmit={handleSubmit}>
          <label>Title:</label><br/>
          <input value={title} onChange={e=>setTitle(e.target.value)}/><br/><br/><br/>
          <label>Content:</label><br/>
          <textarea style={{width: '400px',height:'200px'}} value={content} onChange={e=>setContent(e.target.value)}/><br/><br/><br/>
          <button type='submit' className='btn btn-success'>Edit Post</button>
        </form><hr/>
        <Link to='/' className='btn btn-primary'>Back To Home</Link>
      </div>
      ) : (
        <div>
          <br /><br />
          <h2 className='text-warning'>Alert!!</h2>
          <br />
          <hr/>
          <br />
          <h1 className='text-danger'>***Go To Home Page And Edit Any Post To Show This Page***</h1>
          <br />
          <hr/>
          <br />
          <Link to="/" className='btn btn-primary'>Back To Home</Link>
          <br /><br />
          <hr/>
        </div>
      )}
    </div>
  )
}

export default EditPost