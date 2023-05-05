import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
export const Nav=()=>{
    return (
        <nav className='nav'>
            <Link to='signup'><Button variant="contained">Signup</Button></Link>
            <Link to='login'><Button variant="contained">Login</Button></Link>
        </nav>
    )
}