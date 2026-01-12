const fs = require("fs"); 
console.log("first");

const data = "this is a new data";
fs.writeFile(__dirname +'output.txt', data , (err)=> {
    if(err) throw err
    console.log("file write success");
    
})

console.log("end");