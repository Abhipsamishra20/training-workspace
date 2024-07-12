import EventEmitter from 'events'
import fs from 'fs'

const readFileUsingEventEmitter = (fileName) => {

    const emitter = new EventEmitter()
    fs.readFile(fileName,'utf-8',(err,data) =>{

        if(err){
            return emitter.emit('error',err)
        }
        emitter.emit('data',data)
        emitter.emit('end','completed')
    })
    return emitter
}

const emitter = readFileUsingEventEmitter('data')

emitter.on('end',() => console.log('completed'))
emitter.on('error',err => console.error('error ',err))
emitter.on('data',(data) => console.log(data))

console.log('After Reading')