import React from 'react';
import Person from './Person/Person';
import { useState } from 'react';

import './App.css';
//class App extends Component{
const App= () => {
  const [personState, setPersonState]= useState({
    persons: [
        {name:"adi", age:29},
        {name:"yo", age:56},
        {name:"hello", age:65}
    ],
    otherstate: "other state"
  });
  const  switchNameHandler=()=>{
    //console.log("was clicked")
    this.setState({
      persons: [
      {name:"adithya", age:18},
      {name:"yo", age:56},
      {name:"hello", age:65}
    ]
    });
  };

  /*state={
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
  }*/
  //function App() {
// render(){
  return (
    <div  className="App">
      <h1>REACT APP</h1>
      <button onClick={this.switchNameHandler}>switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      <Person name="hehe" age="65">helooo</Person>
    </div>
  );
//}
}
export default App;
