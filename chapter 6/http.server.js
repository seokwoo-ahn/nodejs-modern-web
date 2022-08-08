var http = require('http')

var server = http.createServer()

server.on('request', function (request, response) {
    console.log('Request on')
    response.writeHead(200, { 'Content-Type': 'text/html'})
    response.end('<h1>Hello Web Server with Node.js</h1>')
})

server.on('connection', function () {
    console.log('Connection on')
})

server.on('close', function () {
    console.log('close on')
})

server.listen(52273, function () {
    console.log('server running at http://localhost:52273')
})

setInterval(function () {
    server.close()
}, 10000)