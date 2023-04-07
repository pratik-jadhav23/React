// let express=require("express")
// let signup=require("mongoose")
// let app=express()
// let cors= require('cors')
// let bodyparser=require('body-parser')
// const { default: mongoose } = require("mongoose")
// app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/fsd1",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
//     console.log("con ok")

// }).catch((err)=>{
//     console.log("err in conn")
// })
// app.use(cors())
// app.use("",signup)
// app.listen(5000)


let express=require("express")
let app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.end('res from express server 1')
})                                       
app.get('/about',(req,res)=>{
    // res.json({'msg':'about page'})
    res.end('res from about page')
})
app.get('/products/:id/:name',(req,res)=>{
    res.end(`res from products ${req.params.id}, ${req.params.name}`)
})
app.post('/',(req,res)=>{
    res.end('record created post response')
})
app.delete('/',(req,res)=>{
    obj={ "data":"record delete post response"}
    return  res.json( obj)


})
app.listen(5000,()=>{
    console.log("connected")
})
