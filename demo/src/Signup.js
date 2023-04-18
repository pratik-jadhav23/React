// import './signup.css'
export const Signup=()=>{
    return(<div>
        <form onSubmit={(event)=>{
            event.preventDefault()
            }} className="form">
            <input type="email"  placeholder="Enter ur mail"/>
            <input type="password"  placeholder="Enter password"/>
            <input type="password"  placeholder="Re-enter password"/>
            <button>Signup</button>
            {/* <Display det={det}/> */}
        </form>
    </div>)
}