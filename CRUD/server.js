//import

// const http = require('http');

// const server = http.createServer((req,res) => {
//     console.log("url"+req.url);
//     console.log("http method"+req.method);

//     res.writeHead(200,{
//         "content-type":"text/html"
//     })

//     res.end("hello");
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     let user = {
//         username:"mayank",
//         email:"abcd@gmail.com"
//     }

//     res.writeHead(200,{
//         "content-type":"application/json"
//     })

//     res.end(JSON.stringify({
//         success:"true",
//         user
//     }));
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

import express from "express";
import logfun from "./middlewares.js";

const app = express();

app.use(express.json());

//global middleware
app.use(logfun)

let data = [
  {
    id: 1,
    username: "qwert",
    password: "qwer123",
  },
  {
    id: 2,
    username: "ramesh",
    password: "1234",
  },
];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "home route",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({
    message: "all user",
    data,
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;
  //validation
  if (!username || !password) {
    return res.status(400).json({
      message: "username and password require",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "password strength is weak",
    });
  }

  let newuser = {
    id: data.length + 1,
    ...req.body,
  };

  data.push(newuser);

  res.status(200).json({
    message: "user created",
  });
});

app.put("/user/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let {username} = req.body;
    // find user by id
  let userIdx = data.findIndex((ele) => ele.id == id);

  if (userIdx == -1) {
    res.status(400).json({
      message: "user not found",
    });
  }
  // create new updated user
  let updatedUser = { ...data[userIdx], username: username };
  // updated the data array
  data[userIdx] = updatedUser;

  res.status(200).json({
    message: "user updated",
  });
});

app.delete("/user/:id",logfun,(req,res)=>{
    const id = parseInt(req.params.id)
    const userIdx = data.findIndex((ele)=>ele.id===id);
    const userdeleted = data[userIdx]

    if(userIdx==-1){
        return res.status(200).json({
        message:"user not found"
    })
    }
    data.splice(userIdx,1);

    res.status(200).json({
        message:"user deleted",
        user: userdeleted
    })
})

app.listen(3000, () => {
  console.log("server is running on port 3000");
});