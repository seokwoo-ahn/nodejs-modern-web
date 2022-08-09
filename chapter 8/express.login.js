var fs = require('fs')
var http = require('http')
var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (request, response) {
    if (request.cookies.auth) {
        response.send('login success')
    } else {
        response.redirect('/login')
    }
})

app.get('/login', function (request, response) {
    fs.readFile('login.html', function (error, data) {
        response.send(data.toString())
    })
})

app.post('/login', function (request, response) {
    console.log(request.body)

    var login = request.body.login
    var password = request.body.password

    if (login == 'cranberry' && password == 'izone') {
        response.cookie('auth', true)
        response.redirect('/')
    } else {
        response.redirect('/login')
    }

})

app.listen(52273, function() {
    console.log('server running at localhost:52273')
})