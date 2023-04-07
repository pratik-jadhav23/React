import { useState } from "react";
import axios from 'axios'
let Signup=()=>{
    let [resp, setResp]=useState('')
    let [data,setData]=useState({"email":"","password":""})
    let upstate=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let saveData=async()=>{
        console.log(data)
        let res= await axios.post("http://localhost:5000/save",data)
        setResp(res.data.msg)
        
    }
    return(<div>
        <input type="text" onChange={(e)=>upstate(e)} name="email"/>
        <input type="password" onChange={(e)=>upstate(e)} name="password"/>
        <button onClick={saveData}>Signup</button>
    </div>)
}
export default Signup