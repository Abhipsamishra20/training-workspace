import fs from 'fs/promises';

const readFile = async (fileName)=>{
    return await fs.readFile(fileName)
}

(async() =>{
    try{
        const data = await readFile('data')
        console.log(data.toString())
    }catch(err){
        console.error(err)
    }
})()//iife immediately invoked function expression self invoked 

console.log('Before Reading')

