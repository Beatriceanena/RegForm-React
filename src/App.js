// import React, {useState,useEffect} from 'react';
// import { useState } from 'react';
import './App.css';
import Form from './form'

function App() {
  // // const [count, setCount]=useState(0);
  // const [name, setName]=useState("");
  // const[password, setPassword]=useState("");

  // const handleChange = (event)=>{
  //   setName(event.target.value)
  //   setPassword(event.target.value)
  // }

  // useEffect(()=>{
  //   setName("Amanda")
  //   setCount(count+1)
  // },[count])

  return (
    <div>
      {/* <h1>{name}</h1>
     <p>{count}</p>
     <button>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
     </button> */}
       <Form/> 
    </div>
  );
}

export default App;
