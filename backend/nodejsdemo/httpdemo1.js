import EventEmitter from 'events'
import http from 'http'

const server = http.createServer()

console.log(server instanceof EventEmitter)//true shows that server is an instance of Eventemitter

server.on('request',(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write('Welcome To the World of Node.Js')
    res.end()
})

server.listen(8888, ()=> console.log('server started'))
