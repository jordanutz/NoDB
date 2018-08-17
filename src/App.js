import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      trainers: []
    }
  }

  componentDidMount () {
    // console.log('herro')
    axios.get('/api/trainers').then(res => {
      console.log(res)
      this.setState({
        trainers: res.data
      });
    });
  }

  render() {
    let {trainers} = this.state
    let newTrainers = trainers.map(trainer => {
      let {name, age, gender, id, hometown, region, url} = trainer
      return (
        <div key={id}>

          <h1>{name}</h1>
          <h2>{age}</h2>
          <h2>{gender}</h2>
          <h2>{hometown}</h2>
          <h2>{region}</h2>
          <img src={url}/>

        </div>)
    })
    return (

      <div>
        {newTrainers}
      </div>
    );
  }
}

export default App;
