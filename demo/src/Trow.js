function Trow(props){
    let a=props.data
    let edit=()=>{
        let e=document.getElementById("edit")
        if(e.innerHTML=="edit") e.innerHTML='save'
        else e.innerHTML='edit'
    }
    return(
            <tr>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.id}</td>
                <td>{a.marks}</td>
                <td><button id="edit" onClick={edit}>edit</button><button>delete</button></td>
            </tr>
    
    )
}
export default Trow;