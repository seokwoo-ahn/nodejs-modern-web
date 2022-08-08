var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response){
    var date = new Date()
    date.setDate(date.getDate() + 7)

    response.writeHead(200, {
        'Set-Cookie': [
            'IZONE = chaewon;Expires = ' + date.toUTCString(),
            'cran = berry'
        ]
    })
    response.end('<h1>' + request.headers.cookie + '</h1>')
})

server.on('request', function (request, response) {
    console.log('Request on')
    fs.readFile('HTMLPage.html', function (error, data){
        response.writeHead(200, { 'Content-Type': 'text/html'})
        response.end(data)
    })
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