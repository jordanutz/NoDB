let id = 0;
let teamBuilder = [];

module.exports = {
  read: (req, res) => {
    console.log('hit')
    res.status(200).send(teamBuilder);
  },

  create: (req, res) => {
    const {name, sprite} = req.body.pokemonInput
    // console.log(req)
    // console.log(req.body)
    // console.log(req.body.pokemonInput)
    let pokeProfile = {
      name: name,
      sprite: sprite,
      id: id++
    }
    teamBuilder.push(pokeProfile);
    res.status(200).send(teamBuilder)
  },


  update: (req, res) => {
    const {id} = req.params
    let index = teamBuilder.findIndex (pokemon => pokemon.id == id)
    const {name} = req.body
    console.log(req.body);

    if (index !== -1) {
      /* Change only the name of the component*/ 
      teamBuilder[index].name = name;
      res.status(200).send(teamBuilder)
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
