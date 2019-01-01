import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from 'radium';
class App extends Component {
  state = {
    persons: [
      { id: 'dasdas', name: "Zubair", age: "22" },
      { id: 'dasdas1', name: "Faraz", age: "26" },
      { id: '1esads', name: "Umer", age: "25" }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
     persons
    });
  };
  swithcNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: "22" },
        { name: newName, age: "26" },
        { name: newName, age: "25" }
      ]
    });
  };
  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid purple",
      padding: "8px",
      color: "#fff",
      "borderRadius": "4px",
      cursor: "pointer",
      // ':hover': {
      //   boxShadow: '0px 0px  4px 3px #000',
      //   color: 'green',
      //   backgroundColor: '#ccc'
      // }
    };

    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = 'red'

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key= {person.id }
                changed = {(event) => this.nameChangedHandler(event, person.id)}
              />
            );
  
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.swithcNameHandler.bind(this, "Faraz Sarwar")} // this seems better way to pass function
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.swithcNameHandler.bind(this, "Umer Javed")}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.swithcNameHandler}
          >
            {" "}
            I love to Play Cricket
          </Person> */}
        </div>
      );
    }

    let classes = [];
    if( this.state.persons.length <= 2) {
      classes.push('red');
    }
    if( this.state.persons.length <=1 ) {
      classes.push('bold');
    }
    
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, Zubair Here</h1>
        <p className = {classes.join(' ')} >This is working fine</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
          // this can be inefficient
        >
          {" "}
          Toggle Container
        </button>
        {persons}
      </div>
      // </StyleRoot>
      // return React.createElement('div', { className: 'App'}, React.createElement('h1', null,  'hello, i m Zubair'));
    );
  }
}

// export default Radium(App);
export default App;
