import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {

  state = {
persons: [
{id:'id1', name: 'Max', age:28},
{id:'id2',name:'Mule', age:29},
{id:'id3',name:'Stephanie', age:27}
  ]  ,
  otherState: 'Some other value',
  showPersons: false
}



nameChangeHandler= (event,id) => {
//console.log('was Clicked!');
const personIndex = this.state.persons.findIndex(p=>{
  return p.id===id;
});
const person={
...this.state.persons[personIndex]
};
person.name=event.target.value;
const persons = [...this.state.persons];
persons[personIndex]=person;
this.setState( {persons:persons} )
}

togglePersonsHandler = () => {
const doesShow= this.state.showPersons;
this.setState({showPersons: !doesShow});
}

deletePersonsHandler = (personIndex) => {

//const persons = this.state.persons.slice();

const persons = this.state.persons;
persons.splice(personIndex,1);
this.setState(persons:persons);
}


  render() {

  const style={
backgroundColor: 'green',
color:'white',
font: 'inherit',
border: '1px solid black',
padding: '8px',
cursor: 'pointer',
':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
      }
  };


    let persons = null;

if(this.state.showPersons){
      persons = ( 
        <div>
        {this.state.persons.map((person,index) => {
          return <Person 
          click={() => this.deletePersonsHandler(index)}
          name={person.name}
          age={person.age} 
          key={person.id}
          changed={(event) => this.nameChangeHandler(event,person.id)} />
        })}
     
      </div> 
      );

      style.backgroundColor ='red';
      style[':hover'] = {
      backgroundColor: 'pink',
      color: 'black'
      };
}

const classes=[];
if(this.state.persons.length <=2){
classes.push('red'); // classes=['red']
}
if(this.state.persons.length   <=1){
classes.push('bold'); // classes=['red','bold']
}

    return (
      <div className="App">
      <h1>This is my React App</h1>
      <p className={classes.join(' ')} >This is really working !!</p>
      <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
    {persons}
    
      </div> 
    );
  }
}

export default Radium(App);
