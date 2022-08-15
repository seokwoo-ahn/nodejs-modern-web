var http = require('http')
var fs = require('fs')
var socketio = require('socket.io')

var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPAge.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html'})
        response.end(data)
    })
}).listen(52273, function() {
    console.log('server running at localhost:52273')
})

var io = socketio(server)

io.on('connection', function (socket) {
    console.log("socket connected")
    
    socket.on('name', function(data) {
        console.log('Client Send Data:', data)

        socket.emit('msg', data)
    })
})