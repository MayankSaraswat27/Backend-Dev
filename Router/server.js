import express from 'express';
import userRoute from "./router/userRoute.js"
import registrationRoute from "./router/registrationRoute.js";
import dashboardRoute from "./router/dashboardRoute.js";
const app = express();
const port = 3000;

app.use("/api",userRoute)
app.use("/register",registrationRoute)
app.use("/dash",dashboardRoute)



app.listen(port,()=>{
    console.log("server is running on port"+port)
})