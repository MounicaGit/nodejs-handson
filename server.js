const http = require('http');
const fs = require('fs');

const server = http.createServer((reuest, response) => {

    // response.writeHead(200, {
    //     "Content-type": "text/html"
    // })
    // const obj = {'name': 'asdf',"age":10}
    // response.end(JSON.stringify(obj)) // writing json to browser


    // let htmlContent = fs.readFileSync("./newFile.html", "utf-8")
    // htmlContent=htmlContent.replace('{{name}}', 'Dhiya') // replace string for showing dynamic data 
    // response.end(htmlContent)  // html content from file to browser

    // const htmlContent = fs.createReadStream("./newFile.html").pipe(response) // writing html content from file as streams to browse


    if (reuest.url === "/home") {
        response.writeHead(200, { 'Content-type': 'text/html' })
        const content = fs.readFileSync("./html-pages/home.html")
        response.end(content)
    } else if (reuest.url === "/about") {
        response.writeHead(200, { 'Content-type': 'text/html' })
        const content = fs.readFileSync("./html-pages/about.html")
        response.end(content)
    } else if (reuest.url === "/data") {
        response.writeHead(200, { 'Content-type': 'application/json' })
        const obj = { "name": "Dhiya", "age": 2 }
        response.end(JSON.stringify(obj))
    }
    else {
        response.writeHead(404, { 'Content-type': 'text/html' })
        const content = fs.readFileSync('./html-pages/error.html')
        response.end(content)
    }
})

server.listen(3000, () => console.log("server running on port 3000"))