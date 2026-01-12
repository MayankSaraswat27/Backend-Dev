//absolute path
// const path=require("path");
// const fs=require("fs");
// const absolutePath=path.resolve("./log.txt");
// console.log(absolutePath);
// console.log(__dirname);
// console.log(path.basename("./log.txt"));// filename with extension.
// console.log(path.extname("./log.txt"));// .txt.

// const joinedPath=path.join(__dirname,"/notes","/logs.txt");
// console.log(joinedPath);

// const parsedPath=path.parse(joinedPath);
// console.log(parsedPath);

// const filePath=path.join(__dirname,"log.txt");
// const data=fs.readFileSync(filePath,"utf-8");
// console.log(data);


// http methods
// 1.get
// 2.post
// 3.put
// 4.delete
// 5.patch


//API

const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World</h1>");
    res.end("Hello from the server");
});
server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});