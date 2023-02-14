import {useState} from "react"
import MCQ_radiobutton from "./MCQ_radiobutton"
import MCQ_submit from "./MCQ_submit"

let MCQ=()=>{
    var qarr=[{id:1,q:"q1",opt1:"a",opt2:"b",opt3:"c",opt4:"d"},
    {id:2,q:"q2",opt1:"a",opt2:"b",opt3:"c",opt4:"d"},
    {id:3,q:"q3",opt1:"a",opt2:"b",opt3:"c",opt4:"d"},
    {id:4,q:"q4",opt1:"a",opt2:"b",opt3:"c",opt4:"d"},
    {id:5,q:"q5",opt1:"a",opt2:"b",opt3:"c",opt4:"d"}]
    let [ans,setAns]=useState({})
    let [result,setResult]=useState(0)
    let ar={1:4,2:4,3:4,4:4,5:4}
    let fun=(e)=>{
        setAns({...ans,[e.target.name]:e.target.value})
        console.log(ans)
    }
    
    let fun2=(e)=>{
        console.log("ans=",ans)
        var c=0
        for(let i in ans){
            if(ans[i]==ar[i])
                c++
        }
        
        console.log(c)
        setResult(c)
    }
    return(
        <div>
            <div>
            {
                qarr.map((item,i)=>{
                    // console.log(item)
                    return(
                        <MCQ_radiobutton data={item} fun={fun} key={i}/>
                    )
                     
                })
               
            }
            <div>
            <button onClick={fun2}>submit</button>
            RESULT: {result}/{qarr.length} 
            </div>

            </div>
            {/* <div><MCQ_submit ar={ar} c={c} fun2={fun2} len={qarr.length}/></div> */}
        </div>
    )
}
export default MCQ