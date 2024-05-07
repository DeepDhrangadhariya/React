import React from 'react'
import Login from './Login'

export default function Employee() {
const [data, setData] = React.useState({
    tabledata: []
})

    React.useEffect(() => {
   const Data = [{
        ID : 1,
        name: 'Ayan',
        position: 'Servent',
        salary: 12000
    },
    {
        ID : 2,
        name: "Raj",
        position: 'Reptionist',
        salary: 10500
    },
    {
        ID : 3,
        name: 'Meet',
        position: 'Accountant',
        salary: 17750
    },
    {
        ID : 4,
        name: 'Prem',
        position: 'Security',
        salary: 8500
    }, 
    {
        ID : 5,
        name: 'Rajshree',
        position: 'Teacher',
        salary: 15000
    }

]

    setData({
        tabledata: Data
    })

},[])


function islogged()
{
    window.location.replace(<Login/>)
}

  return (
    <>  

        <div className="box">
           
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
               { data.tabledata.map((el,index)=> {
                
               return <tr key={index}>
                    <td>{el.ID}</td>
                    <td>{el.name}</td>
                    <td>{el.position}</td>
                    <td>{el.salary}</td>
                </tr>

                })
                
                }
 
<button onClick={islogged}>Logout</button>

            </table>
        </div>

    </>
  )
}
