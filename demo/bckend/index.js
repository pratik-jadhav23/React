let http=require('http')
let fs=require('fs')

function fun(){
    // reading data in synchronous way
    let data=fs.readFileSync ('abc.txt','utf-8')
    return data
}
// function async(){
//     var http
//     return ()
// }



let server=http.createServer((req,res)=>{                                                                                                                                                                                                                                                                                                                                                                     
    console.log(req.url)
    let ans=fun()+' extra text here to type'
    res.end(ans)
})
server.listen(5001,()=>{
    console.log('server started')
})