const { log } = require('console');
const {readFileSync , writeFileSync}= require('fs');

// const firstFile= readFileSync('./content/first.txt', 'utf8')
// const secondFile= readFileSync('./content/second.txt', 'utf8')
// console.log(firstFile);
// console.log(secondFile);
// writeFileSync('./content/result-text.txt', `here is the result : ${firstFile}, ${secondFile}`)
const {readFile , writeFile}= require('fs');

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const firstFile= result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
        const secondFile= result
        writeFile('./content/async.txt', `here is the result : ${firstFile},  ${secondFile}`, (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})