const express = require("express");
require("dotenv").config();
var cors = require('cors')

//file imports  
const db = require("./config/db");
const donationRoutes = require("./routes/donation");

const app = express();

//middlewares
app.use(cors())
app.use(express.json());


//adding all routes
app.get("/",(req,res)=>{
    res.send("This is Animesh Karne's Donation App API .")
})
app.use("/",donationRoutes)


app.listen(process.env.SERVER_PORT,()=>{
    console.log("server is running at port ",process.env.SERVER_PORT);
})
