import React, {Component} from 'react';
import Person from './Person/Person';
import { useState } from 'react';

import './App.css';

class Hello extends Component{
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
  //function App() {
render(){
  return (
    <div  className="App">
      <h1>REACT APP</h1>
      <button onClick={this.state.switchNameHandler}>switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Person name="hehe" age="65">helooo</Person>
    </div>
  );
}
}
export default Hello;
