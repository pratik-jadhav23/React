import './Product.css'
let Product=(props)=>{
    let x=()=>{
        props.fun(props.pdet)

    }

    return(<div>
        <div className="img"><img src={props.pdet.img} alt="product"/></div>
        <div>{props.pdet.title}</div>
        <div>{props.pdet.price}</div>
        <button onClick={x}>Add to cart</button>
   
    </div>)
}
export default Product;