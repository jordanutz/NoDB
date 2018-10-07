import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

/* Components */
import Header from './components/Header';
import Current from './components/Current';
import Input from './components/Input';
import Footer from './components/Footer'

class App extends Component {
  constructor () {
    super ();
    this.state = {
      pokemon: [],
      name: '',
      sprite: '',
      newName: ''
    }
  this.getPokemon = this.getPokemon.bind(this);
  this.addPokemon = this.addPokemon.bind(this);
  this.updatePokemon = this.updatePokemon.bind(this);
  this.deletePokemon = this.deletePokemon.bind(this)
  this.nameInput = this.nameInput.bind(this);
  this.spriteInput = this.spriteInput.bind(this);
  this.newNameInput = this.newNameInput.bind(this);
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
    console.log(id, name)
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
    console.log(event.target.value)
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
    let {pokemon, name, sprite, ability, newName} = this.state;
    let {newNameInput, updatePokemon, deletePokemon, nameInput, spriteInput, addPokemon } = this;

    let addAPokePal = pokemon.map(object => {

      return (
        <Current key={object.id} {...object}
          newNameInput={newNameInput}
          updatePokemon={updatePokemon}
          deletePokemon={deletePokemon}
          newName={newName} />
      )
    })

    return (
      <div>
        <Header />

        <div className="main-container">
          <Input nameInput={nameInput}
            spriteInput={spriteInput}
            addPokemon={addPokemon}
            name={name}
            sprite={sprite} />

          <div className='add-poke-pal'>
            {addAPokePal}
          </div>
        </div>

        <Footer />  

      </div>

    )
  }
}

export default App;
