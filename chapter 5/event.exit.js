const { clearInterval } = require("timers");

process.addListener('exit', function() {
    console.log('exit!')
})

process.on('uncaughtException', function(error) {
    console.log('error!')
})

var count = 0;
var id = setInterval(function () {
    count++

    if(count == 3) {clearInterval(id)}

    error.error.error()
}, 2000)