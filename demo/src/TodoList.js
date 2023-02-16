import Table from './Table';


function TodoList() {


  let arr=[{name:'sunil',age:22,id:'101',marks:'92'},
  {name:'pavan',age:25,id:'102',marks:'99.99'},
  {name:'siva',age:22,id:'103',marks:'92'},
  {name:'pratik',age:24,id:'104',marks:'95'},
  {name:'bhanu',age:22,id:'105',marks:'90'}]
  let arr1=[{name:'sunil',age:22,id:'101',marks:'92'},
  {name:'pavan',age:25,id:'102',marks:'99'},
  {name:'siva',age:22,id:'103',marks:'92'},
  {name:'pratik',age:24,id:'104',marks:'95'}]
  let arr3=[]
  return (
    <div>
      <Table data={arr}/>
      {/* <Table data={arr1}/>
      <Table data={arr2}/> */}
    </div>
  );
}

export default TodoList;
