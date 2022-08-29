const http = require('http')
const fs = require('fs')
const port = 2400

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('error:File not found')
        } else {
            res.write(data)
        }
        res.end()
    })
    res.write('hello  i Am Luntras daniel and i dont start a server  :))')


})

server.listen(port, function (error) {
    if (error) {
        console.log('somerhing went wrong ', error)
    } else {
        console.log('Server is listening on port' + port)
    }
})