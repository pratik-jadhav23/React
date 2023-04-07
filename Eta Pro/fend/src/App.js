import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Nav from './Nav';
import Signup from './Signup';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
