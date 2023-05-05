import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Nav} from './Nav';
import Signup from './Signup';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
