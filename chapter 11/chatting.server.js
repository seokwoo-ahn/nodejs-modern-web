var fs = require('fs')

var server = require('http').createServer()
var socketio = require('socket.io')

server.listen(52273, function() {
    console.log('server running at localhost:52273')
})

server.on('request', function (requset, response) {
    fs.readFile('Chatting.html', 'utf8', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
    })
})

var io = socketio(server)

io.on('connection', function (socket) {
    console.log("socket connected")
    console.log("socket id: ", socket.id)

    socket.on('message', function(data) {
        io.sockets.emit('message1', data)
    })
})