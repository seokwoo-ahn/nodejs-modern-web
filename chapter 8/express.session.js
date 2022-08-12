var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use(cookieParser())
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (request, response) {
    var output = {}
    output.cookies = request.cookies
    output.session = request.session

    request.session.now = (new Date()).toUTCString()

    response.send(output)
})

app.listen(52273, function (request, response) {
    console.log('server running at localhost:52273')
})