import {useRef, useState} from 'react'
import Table from './Table'
export default function TodoList(){
    let [arr,setArr]=useState([{rollno:"01",name:"x",branch:"x"}])
    let rollno=useRef("")
    let name=useRef("")
    let branch=useRef("")

    let add=()=>{
        let obj={rollno:rollno.current.value,name:name.current.value,branch:branch.current.value}
        setArr([...arr,obj])
    }

    let Submit=(event)=>{
        event.preventDefault()
    }

    return(
        <div>
           <form onSubmit={Submit}>
           <input type="text" placeholder="Enter rollno" ref={rollno}/>
            <input type="text" placeholder="Enter Name" ref={name}/>
            <input type="text" placeholder="Enter Branch" ref={branch}/>
            <button id="add" onClick={add}>Add</button>
            <button id='update'>Update</button>
           </form>
           <Table arr={arr}/>

        </div>
    )
}