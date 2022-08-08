var http = require('http')

var server = http.createServer()

server.listen(52273, function () {
    console.log('server running at http://localhost:52273')
})

setInterval(function () {
    server.close()
}, 10000)