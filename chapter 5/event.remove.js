var onUncaughtException = function (error) {
    console.log('error! last chance!')

    process.removeListener('uncaughtException', onUncaughtException)
}

process.on('uncaughtException', onUncaughtException)

setInterval(function () {
    error.error.error('hello')
}, 2000)