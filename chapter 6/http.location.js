var http = require("http")

http.createServer(function (request, response) {
    response.writeHead(302, { 'Location': 'http://seok-study.tistory.com'})
    response.end()
}).listen(52273, function() {
    console.log('Server Running at localhost:52273')
})