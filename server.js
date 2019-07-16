// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const path = require('path')
​
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
​
// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/HobbitsDB', { useNewUrlParser: true })
​
app.use('/', api)
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
​
​
const port =3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})