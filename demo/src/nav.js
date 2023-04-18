import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import './nav.css'
export const Nav=()=>{
    return (
        <nav className='nav'>
            <Link to='date'><Button variant="contained">Date and time</Button></Link>
            <Link to='signup'><Button variant="contained">Signup</Button></Link>
            <Link to='login'><Button variant="contained">Login</Button></Link>
            <Link to='MCQ'><Button variant="contained">MCQ's</Button></Link>
            <Link to='API'><Button variant="contained">API</Button></Link>
            <Link to='MaterialUI'><Button variant="contained">MUI</Button></Link>
        </nav>
    )
}