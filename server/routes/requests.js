const express = require('express')
const router = express.Router()
const request = require('request')
const myKey = 'OaPfTEvJ4jLn0YeV9jmG'

router.get('/qoute', function(req, res){
  request.ajax({
    url: 'https://the-one-api.herokuapp.com/v1/quote',
    type: 'GET',
    contentType: 'application/json',
    headers: {
       'Authorization': `Bearer ${myKey}>`
    },
    success: function (result) {
    console.log(result)
    res.send(result)
    },
    error: function (error) {
 
    }
 })
 });

 module.exports = router