var fs = require('fs')
var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var DummyDB = (function () {

}) ();

var app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/user', function (request, response) {})
app.get('/user/:id', function (request, response) {})
app.post('/user', function (request, response) {})
app.put('/user/:id', function (request, response) {})
app.delete('/user/:id', function (request, response) {})

app.listen(52273, function () {
    console.log('server running at localhost:52273')
})