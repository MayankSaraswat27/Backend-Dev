import express from 'express'

const app = express();

const port = 3000;

app.use("/static",express.static('public'));

app.get('/',(req,res)=>{
    res.send("server is running")
})

app.listen(port,()=>{
    console.log("server is running on port 3000")
})
