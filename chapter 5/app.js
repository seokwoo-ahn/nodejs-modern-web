var rint = require('./rint')

rint.timer.on('tick', function() {
    console.log("event start")
})