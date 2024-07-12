import EventEmitter from 'events'
import fs, { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'

const readFileUsingEventEmitter = (folderName) => {

    return createReadStream(folderName)
    .pipe(createGzip())
    .pipe(createWriteStream('a.gz'))
}

const emitter = readFileUsingEventEmitter('data1/data')

// emitter.on('end',() => console.log('completed'))
// emitter.on('error',err => console.error('error ',err))
emitter.on('finished',() => console.log('task accomplised'))

console.log('After Reading')
