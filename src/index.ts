import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express()

app.get("/test",(req,res)=>{
    res.json("Server is up and running on 5000")
})

app.listen(5000,()=>{
    console.log("server is up and running on 5000");
})