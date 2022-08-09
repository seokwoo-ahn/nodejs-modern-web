var http = require('http')
var express = require('express')
var morgan = require('morgan')
var cookieParser = require('cookie-parser')

var app = express()

app.use(morgan('combined'))
app.use(express.static(__dirname + '/static'))
app.use(cookieParser())

app.get('/getCookie', function (request, response) {
    response.send(request.cookies)
})

app.get('/setCookie', function (request, response) {
    var name = request.query.name
    var property = request.query.property
    
    console.log(name)
    console.log(property)

    response.cookie('string', 'cookie')
    response.cookie('json', {
        name: name,
        property: property
    })

    response.redirect('/getCookie')
})

app.get('/image', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<img src="/image.jpg" width="100%"/>')
})

app.get('/', function (request, response) {
    response.status(200).send('cranberry!')
})

app.get('/id/:id/name/:name', function (request, response) {
    var id = request.params.id
    var name = request.params.name
    var data = []
    data.push('id: ' + id)
    data.push('name: ' + name)
    response.status(200).send(data)
})

app.all('*', function (request, response){
    response.status(404).send('error')
})

http.createServer(app).listen(52273, function() {
    console.log('server running at localhost:52273')
})