// import List from './List'
import {useState, useEffect} from 'react'
export const Api=()=>{
    let [data, setData]= useState([])
    let [uid, setUid]=useState(1)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            return res.json().then((data)=>{
                setData(data.slice(0,10))
            })
        })
    })

    console.log(data)
    return(<div>
        <h1>Api fetching Data</h1>
    <table border="1">
        <tr>
            <td>userId</td>
            <td>Id</td>
            <td>Title</td>
            <td>Completed</td>
        </tr> 
    {data.map((item)=>{
        return (
            <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed.toString()}</td>
            </tr>
            )
    })}
    {}

    </table>
    </div>)
}