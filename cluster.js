const cluster = require('node:cluster')

if (cluster.isMaster) {
    console.log("master")
    cluster.fork()
    cluster.fork()
    cluster.fork()
}
else {
    console.log('worker')
    const http = require('http')
    const server = http.createServer((req, res) => { 
        if (req.url === "/fast-page") {
            res.writeHead(200, { "Content-type": "text/plain" })
            res.end("Fast Page")
        }
        else if (req.url === "/slow-page") {
            for (let i = 0; i < 10000000000; i++) {

            }
            res.writeHead(200, { "Content-type": "text/plain" })
            res.end("Slow Page")
        }
    })

    server.listen(8000, () => { console.log("server runs on port 8000") })
}