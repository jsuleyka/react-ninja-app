import React, { Component } from 'react';
import { render } from 'react-dom';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './style.css';

class App extends Component {
   state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 35, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let newArrayNinjas = [...this.state.ninjas, newNinja] //spread = agregar la nueva lista al array ninjas
    this.setState({
      ninjas: newArrayNinjas
    })
  }

  deleteNinja = (id) => {
   let ninjaRemoved = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjaRemoved
    })
  }

  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <p></p>
        <AddNinja addNewNinja={this.addNinja}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
