import { useState } from "react"
import Citems from "./Citems"

let Cart=(props)=>{
    let arr=props.cdet
    
   
    
    
    if(arr.length==0)
    {
        return(<h1>your cart is empty</h1>)
    }
    else{
        return(<><div>
            {arr.map((item,index)=><Citems pdet={item} ind={index} key={index} inc={props.inc} dec={props.dec}  del={props.del}/>)}
            </div>
         
            </>
        )
    }
    
}
export default Cart;