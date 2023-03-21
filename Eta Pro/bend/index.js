let express=require("express")
let signup=require("mongoose")
let app=express()
let cors= require('cors')
let bodyparser=require('body-parser')
const { default: mongoose } = require("mongoose")
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/fsd1",{useNewUrlParser:true,})
