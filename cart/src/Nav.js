import { Link } from "react-router-dom"
import './Nav.css'

let Nav=(props)=>{
    return(<nav className="nav">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart<button>{props.c}</button></Link>
    </nav>)
}
export default Nav;