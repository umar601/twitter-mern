import express from "express"

const app = express();

const port = 8080;

import middlewares from "./middlewares/middleware.js";

import router  from "./routes/route.js";


middlewares(app)


app.use("/",router);

app.listen(port,()=>{

    console.log("port is litening at 8080")
})