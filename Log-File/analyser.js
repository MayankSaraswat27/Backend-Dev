const express = require("express")
const fs = require("fs")
const { totalmem } = require("os")
const readline = require("readline")

const app =  express()

app.get("/analyse", async (req,res)=>{
    const { logfile } = req.query;
    let errCnt = 0;
    let totalCnt = 0;
    


    const stream = fs.createReadStream(logfile)
    const readLine = readline.createInterface({input: stream})


    for await (const line of readLine){
        totalCnt++;
        if(line.toLowerCase().includes("error")){
            errCnt++;
        }
    }

    res.json({
        totalCnt,
        errCnt,

        successLines: totalCnt - errCnt
    })
})

app.listen(3000,()=>{
    console.log("Log analyser running")
})