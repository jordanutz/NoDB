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
      ability: ""
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

  addPokemon (name, sprite, ability) {
    const pokemonInput = {
      name: name,
      sprite: sprite,
      ability: ability
    }
    axios.post('/api/pokemon', {pokemonInput}).then(res => {
      console.log(res)
      this.setState({
      pokemon: res.data
      })
      console.log(this.state.name, this.state.sprite, this.state.ability)
    })
  }

  updatePokemon (id) {
    axios.put(`/api/pokemon/deletePokemon${id}`).then(res => {
      this.setState({
        pokemon: res.data
      })
    })
  }

  deletePokemon (id) {
    axios.delete(`/api/pokemon/deletePokemon${id}`).then(res => {
      this.setState({
        pokemon: res.data
      })
    })
  }

  nameInput (event) {
    this.setState({
      name: event.target.value
    })
  }

  spriteInput (event) {
    this.setState({
      sprite: event.target.value
    })
  }

  abilityInput (event) {
    this.setState ({
      ability: event.target.value
    })
  }

  render() {
    let {pokemon, name, sprite, ability} = this.state
    let addAPokePal = pokemon.map(object => {
      let {name, sprite, ability, id} = object
      return (
        <div key={id}>
        <h3>{name}</h3>
        <img src={sprite}/>
        <h3>{ability}</h3>
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
          <h3>Ability:</h3><input onChange={(event) => this.abilityInput(event)}/>
          <center><img src="http://pngimg.com/uploads/pokeball/pokeball_PNG24.png" className="submitPokemon" onClick={() => this.addPokemon(name, sprite, ability)}/></center>
          </div>
          <div className="current-pokedex">
            {addAPokePal}
            <button onClick={this.updatePokemon}>Edit</button>
            <button onClick={this.deletePokemon}>Delete</button>
        </div>
      </div>
    </main>
  </div>

    )
  }
}

export default App;
