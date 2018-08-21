import React, {Component} from 'react';

const Current = (props) => {
  console.log(props.id)
    return(
      <div className="current-pokedex" key={props.id}>
        <input className="inputNew" type="text" placeholder={props.name} onChange={ (event) => props.newNameInput(event)}/>
        <img className="sprite" src={props.sprite}/>
        <center><button className="edit margin" onClick={ () => props.updatePokemon(props.id, props.newName)}>Give Nickname</button></center>
        <center><button className="edit" onClick={ () => props.deletePokemon(props.id)}>Delete</button></center>
      </div>
    )
  }

export default Current
