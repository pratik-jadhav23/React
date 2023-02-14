let MCQ_radiobutton=(props)=>{
    // console.log(props)
    return(
        <div>
            <div>{props.data.q}</div>
            <div>
                <input type="radio" name={props.data.id} value="1" onChange={props.fun}/>{props.data.opt1}
                <input type="radio" name={props.data.id} value="2" onChange={props.fun}/>{props.data.opt2}
                <input type="radio" name={props.data.id} value="3" onChange={props.fun}/>{props.data.opt3}
                <input type="radio" name={props.data.id} value="4" onChange={props.fun}/>{props.data.opt4}
            </div>
        </div>
    )
}
export default MCQ_radiobutton