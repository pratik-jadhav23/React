import {Link} from 'react-router-dom'
export const Nav=()=>{
    return (
        <nav>
            <Link to='date'>Date and time</Link>
            <Link to='login'>Login</Link>
            <Link to='MCQ'>MCQ</Link>
            <Link to='API'>API</Link>
            <Link to='MaterialUI'>MaterialUI</Link>
        </nav>
    )
}