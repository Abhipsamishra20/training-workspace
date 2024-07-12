import fs from 'fs';

const readFile = (fileName,cb)=>{
    const data = fs.readFileSync(fileName)
    return data
}

console.log(readFile('data').toString())

console.log('Before Reading')
