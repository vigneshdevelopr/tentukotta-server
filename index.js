import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoConnect } from "./Database.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT
app.use(cors());
app.use(express.json())
MongoConnect();



app.get('/',(req,res)=>{
    return res.status(200).send('your server has been hosted successfully')
}
)
//listening
app.listen(PORT, ()=>console.log(`Your Server will be lisenting on port http://localhost:${PORT}`)); 

