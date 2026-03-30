const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

app.get("/syncronize",(req,res)=>{
    const { sourceDir, destinationDir } = req.query;

    try {
        const sourceFiles = fs.readdirSync(sourceDir)
        const targetFiles = fs.readdirSync(destinationDir)

        sourceFiles.forEach(file =>{
            const srcPath = path.join(sourceDir, file);
            const tgtPath = path.join(destinationDir, file);

            if (!targetFiles.includes(file)) {
                fs.copyFileSync(srcPath, tgtPath);
            }
        })

        res.send("Completed Syncronization");
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.listen(3000,()=>{
    console.log("Syncing is going on");
})