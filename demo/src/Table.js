import Trow from "./Trow";
function Table(props){
 let arr=props.data
    return(
        <div>
            <table border='1'>
                <thead>

               
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Id</th>
                    <th>Marks</th>
                    <th>Edit/Delete</th>
                </tr>
                </thead>
                <tbody>
                {arr.map((item,i)=><Trow key={i} data={item}/>)}
                </tbody>
            </table>
        </div>
    )
}
export default Table;