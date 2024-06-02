import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddPost({addNew}) {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [image,setImage] = useState(null)

    const navigate = useNavigate()

    function handleSubmit(e)
    {
        e.preventDefault()
        const newPost = {title, content, image}
        addNew(newPost)
        navigate('/')
    }

    function handleImage(e)
    {
        const imgURL = URL.createObjectURL(e.target.files[0])
        setImage(imgURL)
    }

  return (
    <div>
        <h1>Add Post</h1><hr/>

        <form onSubmit={handleSubmit} >
            <label>Title:</label><br />
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} /><br /><br /><br />
            <label>Content:</label><br />
            <textarea type="text" value={content} onChange={e => setContent(e.target.value)} /><br /><br /><br />
            <input type='file'  onChange={handleImage} /> <br /><br /><br />
            <button type='submit' className='btn btn-success'>Add Post</button>
        </form><hr/>

        <Link to='/' className='btn btn-dark'>Back To Home</Link>
    </div>
  )
}

export default AddPost