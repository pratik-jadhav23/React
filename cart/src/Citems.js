import './Product.css'
import { useState } from "react"
let Citems=(props)=>{
    let upd=()=>{
        props.inc(props.ind)
    }
    let dc=()=>{
        props.dec(props.ind)
    }
    let dl=()=>{
        props.del(props.ind)
    }
   
    return(
        <div>
            <div className="img"><img src={props.pdet.img} alt="product"/></div>
        <div>{props.pdet.title}</div>
        <div>{props.pdet.price}</div>
        <div>
            <button onClick={dc}>-</button>
            <span>{props.pdet.c}</span>
            <button onClick={upd}>+</button>
            <div>total:{parseInt(props.pdet.total)}</div>
            <button onClick={dl}>delete</button>
        </div>
       
        </div>
    )
}
export default Citems;