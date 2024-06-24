import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner'

function GetData({refresh}) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetching = async () => {
            try{
                let response = await axios.get('http://localhost:5000/Products')
                console.log(response.data)
                setData(response.data)
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            }
            catch (error) {
                console.log('Error')
                setLoading(false)
            }
        }
        fetching()
    },[refresh])

  return (
    <div>
        <h1>Get Data: </h1><br />
        {
            loading ? (
                <div className='loader'>
                    <ThreeCircles
                        type='ThreeCircles'
                        color="#4fa94d"
                        width={200}
                        height={200}
                    />
                </div>
            ) : (
                <div className='main'>
                    {
                        data.map((e,index) => (
                            <div className='submain' key={index}>
                                <h2>{e.title}</h2>
                                <h3>$ {e.price}</h3>
                            </div>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default GetData