import React from 'react';

const Current = (props) => {

  const {id, name, newNameInput, newName, deletePokemon, updatePokemon, sprite} = props;

    return (
      <div className="current-pokedex" key={id}>
        <input className="inputNew"
          type="text"
          placeholder={name}
          onChange={ (event) => newNameInput(event)}/>

        <img className="sprite" src={sprite}/>

        <center><button
          className="edit margin"
          onClick={ () => updatePokemon(id, newName)}>Give Nickname</button></center>

        <center><button
          className="edit"
          onClick={ () => deletePokemon(id)}>Delete</button></center>
      </div>
    )
  }

export default Current;
