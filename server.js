const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api);
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
mongoose.connect('mongodb://localhost/HobbitsDB', { useNewUrlParser: true })

const port = 3000
app.listen(port, function(){
    console.log("server started on port: " + port)
})