import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditPost({P,EP}) {

    const{id} = useParams()

    let post = P.find(p => p.id === parseInt(id))

    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image,setImage] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if(post)
        {
            setTitle(post.title)
            setContent(post.content)
            setImage(post.image)    
        }
    },[post])

    function handleSubmit(e)
    {
        e.preventDefault()
        EP(post.id, title, content,image)
        navigate('/')
    }

    function handleImage(e)
    {
        const imgURL = URL.createObjectURL(e.target.files[0])
        setImage(imgURL)
    }

  return (
    <div>
        {post ? (
            <div>
                <h1>Edit Page</h1><hr />

                <form onSubmit={handleSubmit} >
                    <label>Title:</label><br />
                    <input type='text' value={title} onChange={e=>setTitle(e.target.value)} /> <br /><br /><br />
                    <label>Content:</label><br />
                    <textarea value={content} onChange={e=>setContent(e.target.value)} /> <br /><br /><br />
                    <input type='file' onChange={handleImage} /><br /><br /><br />
                    <button type='submit' className='btn btn-success' >Edit Post</button>
                </form><hr />

                <Link to='/' className='btn btn-dark' >Back To Home</Link>
            </div>
        ) : (
            <div>
                <br /><br />
                <h2 className='text-warning' >Alert!!</h2>
                <br /><hr /><br />
                <h1 className='text-danger' >***Go To Home Page And Edit Any Post To Show This Page***</h1>
                <br /><hr /><br />
                <Link to='/' className='btn btn-dark' >Back To Home</Link>
                <br /><br /><hr />
            </div>
        )}
    </div>
  )
}

export default EditPost