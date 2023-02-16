function Trow(props){
    let a=props.data
    console.log("a=",a)
    let edit=(event)=>{
        console.log(event)
        let e=document.getElementById(props.j)
        if(e.innerHTML=="edit") e.innerHTML='save'
        else e.innerHTML='edit'
    }
    return(
            <tr>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.id}</td>
                <td>{a.marks}</td>
                {/* <td><h1>{a}</h1></td> */}
                <td><button id={props.j} onClick={edit}>edit</button><button>delete</button></td>
            </tr>
    
    )
}
export default Trow;