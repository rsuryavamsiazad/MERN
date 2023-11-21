const fs =require('fs')

let tf=fs.readFileSync('./intro.txt','utf-8');
console.log(tf);

fs.writeFileSync('./outro.txt',`This is created by file writing system: ${tf}.
created on : ${new Date()}`);