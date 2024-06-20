import axios from 'axios'
import React, { useState } from 'react'

function PostData() {

    const [post, setPost] = useState({
        title : '',
        content : ''
    })

    const handleChange = (e) => {
        setPost({...post, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/Posts', post)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            Title : <input type='text' name='title' onChange={handleChange} value={post.title} /><br/><br />
            Post : <input type='text' name='content' onChange={handleChange} value={post.content} /><br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PostData