import { useState } from "react"
import MCQ_submit from "./MCQ_submit"

let MCQ_radiobutton=(props)=>{
    // console.log(props.index)
    let ind=props.index.toString()
    let[data,setData]=useState({})
    let setAns=(e)=>{
        setData({...data,[props.index]:e.target.value})
        
    }
    <MCQ_submit data={data}/>
    console.log(data)
    return(

        <div>
            <div>
            <input type="radio" name={ind} value="a" onChange={setAns}/>a
            <input type="radio" name={ind} value="b" onChange={setAns}/>b
            <input type="radio" name={ind} value="c" onChange={setAns}/>c
            <input type="radio" name={ind} value="d" onChange={setAns}/>d
            </div>
            <div>
            
        </div>

        </div>
        
    )
    
}
export default MCQ_radiobutton