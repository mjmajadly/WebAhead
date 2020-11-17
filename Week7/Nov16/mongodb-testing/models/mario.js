const mongoose = require('mongoose');

// Everything in Mongoose starts with a Schema.
// Each schema maps to a MongoDB collection and
// defines the shape of the documents within that collection.
const { Schema } = mongoose;

// const salah = {
//   lujain: 'first and only first',
//   alaa: 'alaa string',
//   shoog: 'shorooq',
// };

// const name = salah.lujain;
// const { lujain, alaa, shoog } = salah;

// create Schema and Model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number,
});

// what this telling mangoose is: hey everytime I create new mario
// character we are going to create it in the 'mariochar' collection (the model)
// and base it on the MarioCharSchema Schema

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
