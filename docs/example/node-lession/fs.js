const fs = require('fs')
const Path = require('path')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const http = require('http')
const url = require('url')

// ;(async function () {
//     const content = await readFile(Path.resolve(__dirname, './index.html'), 'utf8')
//     console.log(content)
// })()

// ;(async function () {
//     const content = await readFile(Path.resolve(__dirname, './template.html'), 'utf8')
//     await writeFile('./about.html', content.replace(/{{title}}/g, 'About me'))
// })()

;(function () {
    const server = http.createServer(async (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        let file = './index.html'
        if (url.parse(req.url).pathname === '/about') {
            file = './about.html'
        }
        const content = await readFile(Path.resolve(__dirname, file), 'utf8')
        res.end(content)
    })
    server.listen({
        host: 'localhost',
        port: 8080
    })
    server.on('listening', () => {
        console.log(`listen on port 8080`)
    })
})()