import React, {Component} from 'react';
import Person from './Person/Person';
import { useState } from 'react';

//import './App.css';

const hello = (props) =>{
  const stateArr [ personsState,setPersonsState ] = useState({
    persons: [
        {name:"adi", age:29},
        {name:"yo", age:56},
        {name:"hello", age:65}
    ],
    otherstate: "other state"
  });

  switchNameHandler=()=>{
    //console.log("was clicked")
    this.setState({
      persons: [
      {name:"adithya", age:18},
      {name:"yo", age:56},
      {name:"hello", age:65}
    ]
    })
  }

  
    return (
      <div  className="App">
        <h1>REACT APP</h1>
        <button>switch name</button>
        <Person name='56' age='55'/>
        <Person name='56' age='87'/>
        <Person name='tyt' age=' 97'/>
        <Person name="hehe" age="65">helooo</Person>
    </div>
  );
}
export default hello;

/*

state={
    persons: [
        {name:"adi", age:29},
        {name:"yo", age:56},
        {name:"hello", age:65}
    ],
    otherstate: "other state"
  };
  switchNameHandler=()=>{
    //console.log("was clicked")
    this.setState({
      persons: [
      {name:"adithya", age:18},
      {name:"yo", age:56},
      {name:"hello", age:65}
    ]
    })
  }

*/