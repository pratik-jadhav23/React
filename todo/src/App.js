import { useState } from 'react';
import './App.css';
import Table from './Table';

function App() {
  let [todos,settodos]=useState(["Sunil","Ajay","Pavan"])
  let [todo,setTodo]=useState("")
  let [editid,setEditid]=useState("")
let [edit,setEdit]=useState(1)


  function add(e){
    console.log("todo",todo)
    if(todo=="") window.alert("Field Empty")
    else settodos(todos=>[...todos,todo])
// console.log(todos)
  }
  function update(e){console.log(e.target.id);
    // console.log(editid)
   todos[editid]=todo
    settodos([...todos])
    setEdit(1)
    setTodo("")
      }
  
  return (

    <div className="App">
      <div>Student Data</div>
      <input placeholder="Enter Name" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
      {edit?   <button onClick={add}>add</button>:<button onClick={update}>updatae</button>}
      
      <Table    todos={todos} setTodos={settodos} setEditid={setEditid} setTodo={setTodo} setEdit={setEdit}/>

    </div>
  );
}

export default App;
