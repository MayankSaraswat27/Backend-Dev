import express from "express"
import userRouter from "./router/userRouter.js"


const app = express();
const PORT = 3000;

app.use("/api",userRouter);

app.listen(PORT,()=>{
    console.log("Server is running");
})
