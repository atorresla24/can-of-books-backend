'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/books');

console.log(process.env.DB_URL);
mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.status(200).send('It works!');
});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', getBooks);

async function getBooks(request, response, next){
  try{
    let results = await Book.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Bad request');
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
