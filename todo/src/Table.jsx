import './Table.css'
export default function Table(props){

    let todos=props.todos
    let setTodos=props.setTodos
    let setEditid=props.setEditid
    let setTodo=props.setTodo
    let setEdit=props.setEdit
    // console.log(todos)

//setTodos to delete]
function delete_todo(e){console.log(e.target.id);
                         let arr=[];
                        for(let i=0;i<todos.length;i++){
                            if(i==e.target.id){}
                             else{arr.push(todos[i])}}
                             setTodos(arr)}
//edit
function edit(e){
    setEditid(e.target.id)
    // console.log(e.target.id)
    // setTodo(e.target.id)
    setTodo(todos[e.target.id])
    setEdit(0)
    //console.log('edit todos[id]',todos,todos[e.target.id])
}

    return(<>
    {
           todos && todos.map((item,index)=>{
                return(
                    <div key={index}  id={index} className="tdata">
                        <p>{item}</p>
                        <div className='tdata1'>
                            <button id={index} onClick={edit}>edit</button>
                            <button id={index} onClick={delete_todo}>delete</button>
                        </div>
                        

                    </div>
                )
            
                

            
            })



    }
    
    </>)



}