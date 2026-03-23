import express from 'express';
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import userRoute from './routes/userRoute.js';

dotenv.config();

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api", userRoute);

app.listen(port,()=>{
    console.log("Server is running on port ",port);
})