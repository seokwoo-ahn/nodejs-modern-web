const EventEmitter = require("events")

var custom = new EventEmitter()

custom.on('tick', function () {
    console.log('hello')
})

custom.emit('tick')