const express = require('express')
const router = express.Router()
const request = require('request')
const user = require('../models/hobbits')

router.get('/users', function (req, res) {
    user.find({}).exec(function (err, users) {
        res.send(users)
    })
})

router.post('/user', function (req, res) {
    let newUser = req.body
    let u1 = new user(newUser)
    u1.save()
    res.send("saved!")
})

router.put('/updateuser/:userName', function (req, res) {
    console.log('in')
    let userName = req.params.userName
    let healthStatus = req.body
    user.findOne({ userName: userName }, function (err, user) {
        user.status.push(healthStatus)
        user.save()
        res.send('updated!')
    })
})


router.delete('/user/:userName', function (req, res) {
    let username = req.params.userName
    user.findOne({ userName: username }, function (err, user) {
        user.remove()
        res.send('deleted!')
    })
})





module.exports = router