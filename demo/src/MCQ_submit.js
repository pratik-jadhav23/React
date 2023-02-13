import './MCQ_submit.css'
let MCQ_submit=(props)=>{
    let ansarr=['a','b','c','d','a']
    console.log("sub",props)
    let update=(e)=>{
        let e1=document.getElementById('answers')
        e1.style.display="block"
    }
    return(
        <div>
           <div>
           <button onClick={update}>SUBMIT</button>
           </div>
           <div className="answers" id='answers'>answers:{props.data}</div>
        </div>
    )
}
export default MCQ_submit