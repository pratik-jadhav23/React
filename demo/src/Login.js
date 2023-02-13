import { useState,useRef } from "react"
import Display from "./Display"


function Login(){
    let[det,setData]=useState([])
    let email=useRef("")
    let password=useRef("")
    
    let update=()=>{
        let obj={email:email.current.value,password:password.current.value}
        setData([...det,obj])
        // email.current.value=""
        // password.current.value=""
        console.log("det",det)
        console.log()

    }
    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            }}>
            <input type="email" ref={email} placeholder="Enter ur mail"/>
            <input type="password" ref={password} placeholder="password"/>
            <button onClick={update}>SUBMIT</button>
            <Display det={det}/>
        </form>
    )
}
export default Login

