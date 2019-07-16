const mongoose = require('mongoose')
const Schema = mongoose.Schema

const status = new Schema({
    userName: String,
    date: Number,
    healtyFood: Number,
    sport: Number,
    smiles: Number,
})

module.exports = status