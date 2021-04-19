const http = require('http')
const { request } = require('node:http')

const server = http.createServer((request, response) =>{
    console.log(request.url)

    response
})