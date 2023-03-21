import { Link } from "react-router-dom";
let Nav=()=>{
    return(
       <nav>
       <Link to='/home'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/getdet'>Get Details</Link>
        <Link to='/login'>Login</Link>
       </nav>
        
    )
}
export default Nav