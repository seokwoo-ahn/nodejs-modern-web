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

var id = 0
var io = socketio(server)

io.on('connection', function (socket) {
    console.log("socket connected")
    id = socket.id
    console.log("connected id: " + id)
    
    socket.on('name', function(data) {
        console.log('Client Send Data:', data)

        socket.emit('msg', data)
    })

    socket.on('public', function(data) {
        console.log('public Send Data:', data)
        io.sockets.emit('publicmsg', data)
    })

    socket.on('broadcast', function(data) {
        console.log('broadcast Send Data:', data)
        socket.broadcast.emit('broadcastmsg', data)
    })

    socket.on('private', function(data) {
        console.log('private Send Data:', data)
        socket.to(id).emit('privatemsg', data)
    })
})