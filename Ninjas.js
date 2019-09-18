import React, {Component} from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
// class Ninjas extends Component {
//   render () {
    // const {ninjas} = this.props;
    //const ninjaList = ninjas.map(ninja => {
    const ninjaList = ninjas.filter(ninja => ninja.age > 30).map(ninja => {
        return (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button onClick={ () => {deleteNinja(ninja.id)} }
            >Delete</button>
          </div>
        )
    })

    //console.log(this.props);
   // const {name, age, belt} = this.props; //destrcturacion

    return (
      <div className="ninja-list">
        {ninjaList}
      </div>
    )
  }


export default Ninjas;
