import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React,{useState,useEffect} from 'react';
import Contact from './Components/Contact';
import Employee from './Components/Employee';


function App() {
const [num,setNum]=useState(5)
const [data,setData]=useState([])
  function inc()
  {
    setNum(num+2);
  }
  function dec(){
    setNum(num-1);
  }
  function reset(){
    setNum(5)
  } 
  
  useEffect(()=>{
   async function getData(){
    const get= await fetch(`https://hub.dummyapis.com/employee?noofRecords=${num}&idStarts=1001`);

    const res= await get.json();
    setData(res);
   }
   getData();
  },[num])

  return (
    <>
    <div className="container">
    {/* <div className="main">
      <h2>{num}</h2>
      <div className="button">
      <button className='btn btn-primary' onClick={inc}>Increment</button>
      <button className='btn btn-primary' onClick={dec}>Decrement</button>
      <button className='btn btn-primary' onClick={reset}>Reset</button>
      </div>
      <hr />
      {
        data.map((element,index)=>{
          return(
            <div className='data' key={index}>
            <img src={element.imageUrl} alt="" />
            <h4>First name:{element.firstName}</h4>
            <h4>Last name:{element.lastName}</h4>
            <h4>Email:{element.email}</h4>
            </div>
          )
        })
      }
    </div> */} 
         <h1>Search Contact</h1>
   <Contact/>
   <Employee/>
    
    </div>

    </>
  );
}

export default App;
