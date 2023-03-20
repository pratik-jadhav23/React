let http=require("http")





let ser=http.createServer((req,res)=>{
    console.log( "REQ", req.url)
    if(req.url=="/apple1250"){
       res.end("inside apples ")
    }
   else if(req.url=="/newton"){
        res.end(" apples fell on newton ")
    }
    res.end("welcome")








})









ser.listen(5000)