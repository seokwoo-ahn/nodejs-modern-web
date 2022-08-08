process.on('exit', function () {
    console.log('exit!')
})

process.emit('exit')
process.emit('exit')

process.exit()

process.emit('exit')
process.emit('exit')

console.log('running...')