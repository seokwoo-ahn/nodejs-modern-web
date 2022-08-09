var http = require('http')
var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))
app.use(express.static(__dirname + '/static'))

app.use(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<img src="/image.jpg" width="100%"/>')
})

http.createServer(app).listen(52273, function() {
    console.log('server running at localhost:52273')
})