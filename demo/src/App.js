import logo from './logo.svg';
import './App.css';
import Date1 from "./Date"
import Login from './Login';
import MCQ from './MCQ';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  console.log("hello")
  let [todolist,setTodolist]=useState()
  return (
    <div>
     {/* <Date1 /> */}
     {/* <Login/> */}
     <MCQ/>
     {/* <TodoList/> */}
    </div>
  );
}

export default App;
