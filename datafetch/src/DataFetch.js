import React from 'react'
import { useState,useEffect } from 'react'

function DataFetch() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      let fetched = await fetch("https://api.escuelajs.co/api/v1/products")
      let response = await fetched.json()
      console.log(response)
      setData(response)
    }
    getData()
  },[])
  return (
    <div id='main'>
      {
        data && data.map((e) => (
          <div key={e.id} id='submain'>
            
            <img src={e.images} />
            <h3>{e.title}</h3>
            <h3>$ {e.price}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default DataFetch