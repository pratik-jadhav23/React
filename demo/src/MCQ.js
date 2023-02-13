import MCQ_radiobutton from "./MCQ_radiobutton"
import MCQ_submit from "./MCQ_submit"
let MCQ=()=>{
    let qarr=['1','2','3','4','5']
    
    return(
        <div>
            <div>
            {
                qarr.map((item,index)=>{
                    return(<div key={index}> 
                        <div>{item}
                        <MCQ_radiobutton index={index}/>
                        </div>
                        </div>
                    
                    )
                }
                )
               
            }
            </div>
            <MCQ_submit />

        </div>
    )
}
export default MCQ