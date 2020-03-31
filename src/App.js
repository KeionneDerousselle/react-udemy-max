import React, { useState } from 'react'
import Person from './Person/Person'

// CLASS BASED COMPONENT
// class App extends Component {
//   state = {
//     persons: [ { name: 'Keionne', age: 25 }, { name: 'Darrius', age: 25 }, { name: 'Lynus', age: 5 } ]
//   }

//   switchNameHandler = () => {
//     this.setState({
//       persons: this.state.persons.map(p => ({
//         name: p.name,
//         age: Math.floor(Math.random() * 100)
//       }))
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Fishing!</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     )
//   }
// }

// REACT HOOKS
const app = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [ { name: 'Keionne', age: 25 }, { name: 'Darrius', age: 25 }, { name: 'Lynus', age: 5 } ]
  })

  // const [ otherState, setOtherState ] = useState({
  //   other: 'some other value'
  // })

    const switchNameHandler = newName => {
    setPersonsState({
      persons: personsState.persons.map(() => ({
        name: newName,
        age: Math.floor(Math.random() * 100)
      }))
    })
  }

  const nameChangedHandler = event => {
    setPersonsState({
      persons: personsState.persons.map(() => ({
        name: event.target.value,
        age: Math.floor(Math.random() * 100)
      }))
    })
  }
  // The bind syntax is more performant than anonymous function calls

  return (
    <div>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={() => switchNameHandler('Keionne')}
        changed={nameChangedHandler}/>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Darrius')}
        changed={nameChangedHandler}>
          My Hobbies: Fishing!
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={() => switchNameHandler('Lynus')}
        changed={nameChangedHandler} />
    </div>
  )
}

export default app
