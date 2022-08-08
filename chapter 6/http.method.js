var http = require('http')
var url = require('url')

http.createServer(function (request, response) {
    if (request.method == 'GET') {
        var query = url.parse(request.url, true).query

        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end('<h1>' + JSON.stringify(query) + '<\h1>')

        console.log('GET request')
    } else if (request.method == 'POST') {
        request.on('data', function (data) {
            console.log('POST Data:', data)
            response.writeHead(200)
            response.end(data)
        })
        console.log('POST request')
    }
}).listen(52273, function() {
    console.log('server running at localhost:52273')
})