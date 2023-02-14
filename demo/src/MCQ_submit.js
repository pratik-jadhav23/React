import './MCQ_submit.css'
let MCQ_submit=(props)=>{
    console.log(props)
    let update=(e)=>{
        let e1=document.getElementById('answers')
        e1.style.display="block"
    }
    return(
        <div>
           {/* <div>
           <button onClick={props.fun2}>SUBMIT</button>
           </div>
           <div className="answers" id='answers'>answers:{props.ar} Correct answers=:{props.c}/{props.len}</div> */}
        </div>
    )
}
export default MCQ_submit