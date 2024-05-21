import React from 'react'
import { Link } from 'react-router-dom'

function Home({P}) {
  return (
    <div>
        <h1>Welcome To Our Page</h1><hr/>
        {
          P.map((p)=>(
            <div key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.content}</p>
              <hr/>
            </div>
          ))
        }

        <Link to="/AddPost" className='btn btn-primary'>ADD POST</Link>
    </div>
  )
}

export default Home