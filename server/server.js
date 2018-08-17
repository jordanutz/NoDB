// download express, axios, and body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tC = require ('./controllers/trainers_controller.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/trainers', tC.read)

app.listen(4000, () => console.log('listening on port 4000'))
