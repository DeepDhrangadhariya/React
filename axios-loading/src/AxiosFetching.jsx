import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

function AxiosFetching() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetching = async () => {
            try {
                let response = await axios.get('https://fakestoreapi.com/products')
                console.log(response.data)
                setData(response.data)
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            }
            catch (error) {
                console.error('Error')
                setLoading(false)
            }
        }
        fetching()
    },[])

  return (
    <div>
        {loading ? (
            <div className='loader'>
                <ColorRing 
                type='ColorRing'
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                width={200}
                height={200} 
                />
            </div>
        ) : (
            <div>
                <div className='main'>
                {
                    data.map((el)=>(
                        <div className='submain'>
                            <img src={el.image}/>
                            <h2>{el.title}</h2>
                            <h3>$ {el.price}</h3>
                        </div>
                    ))
                }
        </div>
            </div>
        )}
        
    </div>
    
  )
}

export default AxiosFetching