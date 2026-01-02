import express from "express"

const app = express();

const port = 8080;

import middlewares from "./middlewares/middleware.js";

import router  from "./routes/route.js";
import mongoose from "mongoose";


main().then(()=>{
    console.log("connected scuessfull")
}).catch(()=>{
    console.log("failed")
})

async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/twitter")
    
}


middlewares(app)


app.use("/",router);

app.listen(port,()=>{

    console.log("port is litening at 8080")
})