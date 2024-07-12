import http from 'http'
import fs from 'fs'

const server = http.createServer()

const products = [
    {
        id:1,
        name:'Iphone15'
    },
    {
        id:4,
        name:'Oneplus12'
    }
]

server.on('request',(req,res) => {

    switch(req.url){
        case '/api':
            res.writeHead(200,{'Content-type':'application/json'})
            res.end(JSON.stringify(products))
            break
        case '/home':
        case '/about':
            res.writeHead(200,{'Content-type':'text/html'})
            res.end(fs.readFileSync(`.${req.url}.html`))
            break
        case '/':
            res.writeHead(301,{'Location':'/home'})
            res.end()
            break
        default:
           
            res.writeHead(404)
            res.end()
    }
})

server.listen(8888,() => console.log('server started'))

//1.App generates a new IO operation by submitting a request to event demultiplexer,application
//also specifies a handler which will be invoked when the operation completes,submiting 
//a new request to the demultiplexer is a non blocking call

//2.When a set of IO operation completes,event demultiplexer pushes a set of corresponding 
//events into the event queue.

//3.At this point the event loop iterates over the items of event queue

//4.For each event associated handler is invoked.

//5.The handler which is part of your code gives control to event loop

//6.Once all the items are processed in the event queue,event loop blocks again on demultiplexer
//
