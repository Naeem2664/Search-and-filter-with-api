import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {data} from './data.js'

function Contact() {
    const [search,setSearch]=useState('')
  return (
    <div className="container">
        
      <InputGroup className="mb-3 mt-5">
        <Form.Control
          placeholder="Search Contact"
          aria-label=""
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearch(e.target.value)}
        />

      </InputGroup>
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {data.filter((item)=>{
        return search===''? item:item.first_name.toLowerCase().includes(search)
      }).map((item)=>{
        return(
        <tr>
        <td>{item.id}</td>
        <td> {item.first_name} </td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
      )})} 
      </tbody>
    </Table>
    </div>
  );
}

export default Contact;