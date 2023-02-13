import {Component} from 'react'
class Date1 extends Component{

    constructor(){
        super()
        this.state={time:new Date(),a:0}
    }

   
    render(){
    this.state.a=this.state.a+1
        setInterval(()=>{
            this.setState({time: new Date()}) 
         },1000)
        // console.log(this.state.a)
        // console.log("hi")
        return(
            <h1>{this.state.time.toTimeString()}</h1>
        )
    }

}
export default Date1