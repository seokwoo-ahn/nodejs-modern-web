var http = require('http')
var express = require('express')

var app = express()

app.use(function (request, response) {
    var agent = request.header('User-Agent')

    console.log(request.headers)
    console.log(agent)

    var id = request.query.id
    var userName = request.query.name
    
    console.log("id:",id)
    console.log("user name:",userName)

    if (agent.toLowerCase().match(/chrome/)) {
        response.send("hello chrome")
    } else {
        response.send("please use chorme")
    }

    // response.status(200).send()
})

http.createServer(app).listen(52273, function() {
    console.log('server running at localhost:52273')
})