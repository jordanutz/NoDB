let id = 0;

let teamBuilder = [
  {
    sprite: "https://vignette.wikia.nocookie.net/villiains/images/5/51/Bulbasaur_Pokemon_Red_Sprite_Front_Colour.PNG",
    name: "Bulbasaur",
    id: 0
}
  ]

module.exports = {
  read: (req, res) => {
    console.log('hit')
    res.status(200).send(teamBuilder);
  },

  create: (req, res) => {
    const {name, sprite, ability} = req.body.pokemonInput
    // console.log(req)
    // console.log(req.body)
    // console.log(req.body.pokemonInput)
    let pokeProfile = {
      name: name,
      sprite: sprite,
      ability: ability,
      id: id++
    }
    teamBuilder.push(pokeProfile);
    res.status(200).send(teamBuilder)
  },


  update: (req, res) => {
    const {id} = req.params
    let index = kantoPokemon.findIndex (pokemon => pokemon.id == id)
    const {name, sprite} = req.body

    if (index !== -1) {
      kantoPokemon[index] = {
        name: name,
        age: age,
        id: id
      }
      res.status(200).send(kantoPokemon)
    } else {
      res.status(400).send('Hey now, this Pokemon does not exist.')
    }
  },

  delete: (req, res) => {
    const {id} = req.params
    let index = teamBuilder.findIndex (pokemon => pokemon.id == id)

    if (index !== -1) {
      teamBuilder.splice(index, 1)
      res.status(200).send(teamBuilder);
    } else {
      res.status(400).send('Hey now, this Pokemon does not exist.')
    }
  },
}