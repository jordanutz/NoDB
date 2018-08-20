import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      pokemon: [],
      name: "",
      sprite: "",
      favorite: false,
      newName: ''
    }
  this.getPokemon = this.getPokemon.bind(this);
  this.addPokemon = this.addPokemon.bind(this);
  this.updatePokemon = this.updatePokemon.bind(this);
  this.deletePokemon = this.deletePokemon.bind(this)
  }

  componentDidMount () {
    this.getPokemon()
  };

  getPokemon () {
      axios.get('/api/pokemon').then(res => {
        this.setState({
          pokemon: res.data
        });
      });
    }

  addPokemon (name, sprite) {
    console.log(name, sprite)
    const pokemonInput = {
      name: name,
      sprite: sprite,
    }
    axios.post('/api/pokemon', {pokemonInput}).then(res => {
      console.log(res)
      this.setState({
      pokemon: res.data
      })
    })
  }

  updatePokemon (id, name) {
    axios.put(`/api/pokemon/${id}`, {name}).then(res => {
      console.log(res);
      this.setState({
        pokemon: res.data
      })
    })
  }

  deletePokemon (id) {
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({
        pokemon: res.data
      })
    })
  }

  newNameInput (event) {
    this.setState ({
      newName: event.target.value
    })
  }

  nameInput (event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    })
  }

  spriteInput (event) {
    this.setState({
      sprite: event.target.value
    })
  }


  render() {
    let {pokemon, name, sprite, ability} = this.state
    let addAPokePal = pokemon.map(object => {
      let {name, sprite, ability, id} = object
      return (
        <div className="current-pokedex" key={id}>
        <input className="inputNew" type="text" placeholder={name} onChange={ (event) => this.newNameInput(event)}/>

        <img className="sprite" src={sprite}/>
        <center><button className="edit margin" onClick={ () => this.updatePokemon(id, this.state.newName)}>Give Nickname</button></center>
        <center><button className="edit" onClick={ () => this.deletePokemon(id)}>Delete</button></center>
        </div>
      )
    })

    return (
      <div>
          <div className="header">
          <img src="https://image.flaticon.com/icons/svg/188/188990.svg"/>
          <img src="https://image.flaticon.com/icons/svg/188/188987.svg"/>
          <img src="https://image.flaticon.com/icons/svg/188/188988.svg"/>
          <img src="https://image.flaticon.com/icons/svg/188/188989.svg"/>
          <img src="https://image.flaticon.com/icons/svg/188/188993.svg"/>
          </div>

      <main>
        <div className="main-container">
          <div className="input-pokedex">
          <h2>Catch a Pokemon!</h2>
          <h3>Pokemon:</h3><input onChange={(event) => this.nameInput(event)}/>
          <h3>Sprite:</h3><input onChange={(event) => this.spriteInput(event)}/>
          <h3>Favorite:</h3><button className="favorite">Yes</button><button className="favorite">No</button>
          <center><img src="http://pngimg.com/uploads/pokeball/pokeball_PNG24.png" className="submitPokemon" onClick={() => this.addPokemon(name, sprite)}/></center>
          <center><h5>A Jordan Utz Production</h5></center>
          </div>
            {addAPokePal}
      </div>
    </main>
  </div>

    )
  }
}

export default App;
