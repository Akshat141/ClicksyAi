import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.get("/",(req,res)=>{
    res.json({message:"hello from auth"});
})

const startServer = async()=>{
    try{
        await connectDb();

        app.listen(port,()=>{
            console.log(`Auth server started at ${port}`);
        })
    }catch(error){
        console.log(`Failed to start the auth server ${error.message}`);
        process.exit(1);
    }
}

startServer();