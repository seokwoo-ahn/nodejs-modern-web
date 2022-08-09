var http = require('http')
var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))
app.use(function (request, response) {
    response.send('express middleware')
})

http.createServer(app).listen(52273, function() {
    console.log('server running at localhost:52273')
})