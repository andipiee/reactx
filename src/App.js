import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinjas from './addNinjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Andi', hobby: "Reading book", age: 24, id: 1 },
      { name: 'Bobby', hobby: "Swimming", age: 27, id: 2 },
      { name: 'Ben', hobby: "GYM book", age: 25, id: 3 }
    ]
  }
  addNinjas = (ninja) => {
    ninja.id = Math.random();
    let newNinjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: newNinjas
    })
  }
  deleteNinjas = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount(){
    console.log('Component Mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('Conponent Updated')
    console.log(prevProps, prevState)
  }
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <p>Let's goo!</p>
        <Ninjas deleteNinjas={ this.deleteNinjas } ninjas={ this.state.ninjas }/>
        <AddNinjas addNinjas={ this.addNinjas }/>
      </div>
    );
  }
}

export default App;