var fs = require('fs')
var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer({dest: './multipart/'})

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.get('/', function (request, response) {
    fs.readFile('fileupload.html', function (error, data) {
        response.send(data.toString())
    })
})

app.post('/', upload.single('image'), function (request, response, next) {
    console.log('upload success')
})

app.listen(52273, function (request, response) {
    console.log('server running at localhost:52273')
})