import React from 'react'
import { Link } from 'react-router-dom'

function Home({P,DP}) {
  function handleDelete(id)
  {
    DP(id)
  }
  return (
    <div>
      <h1>Home</h1>
      {
        P.map((e)=>(
          <div key={e.id}>
            <h3>{e.title}</h3>
            <p>{e.content}</p>
            <button className='btn btn-danger' onClick={()=>handleDelete(e.id)}>Delete</button>
            <Link to={`/EditPost/${e.id}`}>
              <button className='btn btn-warning'>Edit</button>
            </Link>
          </div>
        ))
      }<hr/>
      <Link to='/AddPost' className='btn btn-primary'>Add Post</Link>
    </div>
  )
}

export default Home