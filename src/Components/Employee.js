import Table from 'react-bootstrap/Table';
import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Employee = () => {

    const [data,setData]=useState([])
    const [search,setSearch]=useState(data)

    async function getData(){
        const get=await fetch('https://jsonplaceholder.typicode.com/users')
        const res=await get.json()
        setData(res)
        setSearch(res)
        
        console.log(res)
    }

    useEffect(() => {
      getData();
    
    
    }, [])
    const arr = [1,2,3,4,5];
const itemIndex = arr.findIndex( item => item <3 );
console.log( arr[itemIndex] ); // 4

    const Filter=(e)=>{
        setSearch(data.filter(f=>f.name.toLowerCase().includes(e.target.value)))
    }
    

  return (
    <>
      <div className="container">
      <div className="row">
      <div className="col-md-11">
     <InputGroup className="mb-3 mt-5">
        <Form.Control
          placeholder="Search Contact"
          aria-label=""
          aria-describedby="basic-addon2"
          onChange={Filter}
        />

      </InputGroup>
              </div>
              </div>

               <div className="row">
      <div className="col-md-11">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {search.map((d,i)=>(
            <tr key={i}>
            <td> {d.id} </td>
            <td>{d.name}</td>
            <td>{d.username}</td>
            <td>{d.email}</td>
          </tr>
        )

        )}
        
      </tbody>
    </Table>
            
            </div>
            </div>
            </div>
    </>
  )
}

export default Employee
