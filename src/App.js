import React, { Component } from 'react'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [ { name: 'Keionne', age: 25 }, { name: 'Darrius', age: 25 }, { name: 'Lynus', age: 5 } ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: this.state.persons.map(p => ({
        name: p.name,
        age: Math.floor(Math.random() * 100)
      }))
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Fishing!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App
