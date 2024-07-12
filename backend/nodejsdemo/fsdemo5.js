import EventEmitter from 'events'
import fs, { createReadStream } from 'fs'

const readFileUsingEventEmitter = (fileName) => {

    return createReadStream(fileName)
}

const emitter = readFileUsingEventEmitter('data')

emitter.on('end',() => console.log('completed'))
emitter.on('error',err => console.error('error ',err))
emitter.on('data',(data) => console.log(data.toString()))

console.log('After Reading')