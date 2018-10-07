import React, { Component } from 'react';


class Input extends Component {
  constructor(){
    super();
    this.state = {
      playerName: ''
    }
  }

  inputPlayerName = (e) => {
    this.setState ({
      playerName: e.target.value
    })
  }


  render() {
    const {nameInput, spriteInput, addPokemon, name, sprite} = this.props;
    const {playerName} = this.state;
    const {inputPlayerName} = this;

    return (
      <div className="input-pokedex">
        <h3>Name:</h3><input onChange={(e) => inputPlayerName(e)}/> <br/>
        <h3>Pokemon:</h3><input onChange={(event) => nameInput(event)}/><br/>
        <h3>Sprite:</h3><input onChange={(event) => spriteInput(event)}/>
        <h2>Throw a poke'ball, {playerName.toUpperCase()} !</h2>

        <center><img
          src="http://pngimg.com/uploads/pokeball/pokeball_PNG24.png"
          className="submitPokemon"
          onClick={() => addPokemon(name, sprite)}/>
        </center>
      </div>
    )
  }
}

export default Input;
