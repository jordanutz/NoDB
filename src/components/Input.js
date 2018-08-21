import React, {Component} from 'react';

export default function Input (props) {


return (
  <div className="input-pokedex">
    <h3>Pokemon:</h3><input onChange={(event) => props.nameInput(event)}/>
    <h3>Sprite:</h3><input onChange={(event) => props.spriteInput(event)}/>
    <h3>Favorite:</h3><button className="favorite">Yes</button><button className="favorite">No</button>
    <h2>Throw a Poke'ball!</h2>
    <center><img src="http://pngimg.com/uploads/pokeball/pokeball_PNG24.png" className="submitPokemon" onClick={() => props.addPokemon(props.name, props.sprite)}/></center>
    <center><h5>A Jordan Utz Production</h5></center>
  </div>
)
}
