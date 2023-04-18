import logo from './logo.svg';
import './App.css';
import Date1 from "./Date"
import Login from './Login';
import MCQ from './MCQ';
import TodoList from './TodoList';
import { useState } from 'react';
import {Api} from './Api';
import {Nav} from './nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MUI } from './MUI';
import { Signup } from './Signup';



function App() {
  console.log("hello")
  let [todolist,setTodolist]=useState()
  return (
    <div>
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='date' element={<Date1/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='MCQ' element={<MCQ/>}></Route>
      <Route path='API' element={<Api/>}></Route>
      <Route path='MaterialUI' element={<MUI/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
