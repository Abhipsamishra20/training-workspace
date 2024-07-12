import fs from 'fs';

const readFile = (fileName,cb)=>{
    fs.readFile(fileName, (err,data) =>{
        if(err){
            return cb(err)
        }
        const numbers = data.toString().split('\n').map(Number).filter(num => num % 2 !== 0);
        cb(null,numbers)
    })
}

readFile('data',(err,data) => {
    if(err){
        console.error('error reading file')
    }
    console.log(data)
})
