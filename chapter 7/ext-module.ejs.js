var ejs = require('ejs')
var http = require('http')
var fs = require('fs')

http.createServer(function(request, response) {
    fs.readFile('ejsPage.ejs', 'utf8', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(ejs.render(data, {
            name: 'cranberry',
            description: 'Hello ejs world'
        }))
    })
}).listen(52273, function() {
    console.log('server running at localhost:52273')
})