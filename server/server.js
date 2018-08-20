// download express, axios, and body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pC = require ('./controllers/pokemon_controller.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/pokemon', pC.read)
app.post('/api/pokemon', pC.create)
app.put('/api/pokemon/:id', pC.update)
app.delete('/api/pokemon/:id', pC.delete)

app.listen(3500, () => console.log('listening on port 3500'))
