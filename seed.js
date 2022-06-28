'use strict';

// title: { type: String, require: true }, 
// description: { type: String, require: true },
// status: { type: Boolean, require: true }

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/books');

async function seed(){
  await Book.create({
    title: 'Grapes of Wrath',
    Description: 'The Grapes of Wrath, the best-known novel by John Steinbeck, published in 1939. It evokes the harshness of the Great Depression and arouses sympathy for the struggles of migrant farmworkers. The book came to be regarded as an American classic.',
    status: true
  });
  console.log('Grapes Of Wrath added');
  await Book.create({
    title: 'Ready Player One',
    description: 'Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopia in 2045, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which would lead him to inherit the game creator\'s fortune.',
    status: true
  });
  console.log('RPO added');
  await Book.create({
    title: 'Braiding Sweetgrass',
    description: 'Braiding Sweetgrass explores reciprocal relationships between humans and the land, with a focus on the role of plants and botany in both Native American and Western traditions. The book received largely positive reviews, appearing on several bestseller lists.',
    status: false
  });
  console.log('Braiding Sweetgrass');
  mongoose.disconnect();
}

seed();

