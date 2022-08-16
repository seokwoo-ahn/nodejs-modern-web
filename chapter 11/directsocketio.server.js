var fs = require('fs')

var server = require('http').createServer()
var socketio = require('socket.io') // 바로 io = require('socket.io') (server) 로 연결하면 계속해서 socket 초기화 진행

server.listen(52273, function() {
    console.log('server running at localhost:52273')
})

server.on('request', function (requset, response) {
    fs.readFile('HTMLpage2.html', 'utf8', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
    })
})

var io = socketio(server)

io.on('connection', function (socket) {
    console.log("socket connected")
    console.log("socket id: ", socket.id)
    socket.on('setname', function (data) {
        socket.name = data
        console.log(socket.id)
        console.log(socket.name)
    })

    socket.on('getname', function() {
        console.log(socket.id)
        console.log(socket.name)
        socket.emit('responsename', socket.name)
    })
})