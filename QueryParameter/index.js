const express = require('express');
const app = express();
const data = require('./data.js');

app.get('/home',(req,res)=>{
    res.send("Home");
})
app.get("/user",(req,res)=>{
    res.json({
        data
    })
})
app.get("/data/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const userId = data.find((u)=> u.id === id)
    res.send(userId);
})
app.get("/user/profile",(req,res)=>{
    res.send('user profile')
})

app.get("/user/page",(req,res)=>{
    let name = req.query.name;
    let size = req.query.size;
    res.send({
        name,size
    })
})

app.listen(3000,()=>{
    console.log('server is running')
})

