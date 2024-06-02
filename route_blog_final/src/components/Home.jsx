import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home({P,DP}) {
    
    function handleDelete(id)
    {
        DP(id)
    }

    const [search,setSearch] = useState('')
    const filteredPosts = P.filter((f)=>{
        return f.title.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <div>
        <h1>Home</h1><hr/>

        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search' />
        <br /><br /><br />

        {
            filteredPosts.map(e => (
                <div key={e.id}>
                    <img src={e.image} alt='Img Not Found' style={{width : '400px', height : '500px'}} />
                    <h3>{e.title}</h3>
                    <p>{e.content}</p>
                    <button className='btn btn-danger' onClick={() => handleDelete(e.id) } >Delete</button>
                    <Link to={`/EditPost/${e.id}`} >
                        <button className='btn btn-warning' >Edit</button>
                    </Link>
                </div>
            ))
        }<hr/>

        <Link to='/AddPost' className='btn btn-dark' >Add Post</Link>
    </div>
  )
}

export default Home