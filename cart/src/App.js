
import './App.css';
import Product from './Product';
import Nav from './Nav';

import {useState} from 'react'
import Cart from './Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  let arr=[{id:1,title:"mobile",price:4000, img:"https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg.webp"},
{id:2,title:"cover",price:400, img:"https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg.webp"},
{id:3,title:"battery",price:1000, img:"https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg.webp"},
{id:4,title:"tv",price:9000, img:"https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg.webp"},
{id:5,title:"remote",price:400, img:"https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg.webp"}]

 let [total,setTotal]=useState(0)
 let [cart,setCart]=useState([])
 let fun=(dt)=>{
  let f=false
  for(let i=0;i<cart.length;i++)
  {     if(cart[i].id==dt.id){f=true;break}   }
  if(!f){
    setCart([...cart,{...dt,c:1,total:dt.price}])
    setTotal(total+dt.price)
   
  }
 
 
  
 }
 let inc=(ind)=>{
  
  setCart(cart.map((item,index)=>{
    if(index==ind)
          {return {...item,c:item.c+1,total:item.total+item.price}}
    else return {...item}}))


  setTotal(()=>{return total+cart[ind].price})}
  
 let dec=(ind)=>{
  
  setCart(cart.map((item,index)=>{
    if(index==ind)return {...item,c:item.c-1,total:item.total-item.price}
     else return {...item}
    
  }))
  setTotal(()=>{return total-cart[ind].price})
 }
 let del=(ind)=>{
  setTotal(()=>{return total-cart[ind].total})
  setCart(cart.filter((item,index)=>{
      if(index!=ind){return {...item}
      
    }
   
  }))
  
  

 }
 return(<BrowserRouter> 
  
 <Nav c={cart.length}/>
 <Routes>
 <Route path='/' element={arr.map((item,index)=><Product pdet={item} key={index} fun={fun}/>)}/>
<Route path='/cart' element={<Cart cdet={cart} inc={inc} dec={dec} del={del}/>}/>
 </Routes>
 <div>Total: {total}</div>
 </BrowserRouter>
)
}

export default App;
