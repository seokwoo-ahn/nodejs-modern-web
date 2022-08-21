var fs = require('fs')

var server = require('http').createServer()
var socketio = require('socket.io')

server.listen(52273, function() {
    console.log('server running at localhost:52273')
})

server.on('request', function (requset, response) {
    fs.readFile('HTMLpage3.html', 'utf8', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
    })
})

var io = socketio(server)

io.on('connection', function (socket) {
    console.log("socket connected")
    console.log("socket id: ", socket.id)
    socket.on('join', function (data) {
        socket.join(data)
        socket.room = data
    })

    socket.on('message', function(data) {
        io.sockets.in(socket.room).emit('message', data)
    })
})