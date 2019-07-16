const mongoose = require('mongoose')
const Schema = mongoose.Schema
const status = require('./status')

const user = new Schema({
    isManager: Boolean,
    company: String,
    userName: String,
    password: String,
    status: [status]
})

module.exports = mongoose.model('user', user)