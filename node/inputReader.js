const readline = require('readline');
const readl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

readl.question("what is ur name:",(e)=>{
    console.log("this is ur name:"+e)
    readl.close();
});

readl.on('close',()=>{
console.log("the interface is being closed")
process.exit(0);
})