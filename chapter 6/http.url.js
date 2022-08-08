var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname

    if (pathname == '/') {
        fs.readFile('HTMLPage.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    } else if (pathname == '/image') {
        fs.readFile('image.jpg', function (error, data) {
            response.writeHead(200, {'Content-Type': 'image/jpg'})
            response.end(data)
        })
    }
}).listen(52273, function() {
    console.log('server running at localhost:52273')
})