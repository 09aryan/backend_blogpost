const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT ||3000;
 
//middleweare json parasing
app.use(express.json());

//route
// const blog=require("./routes/blog");
const connectWithDb = require("./config/database");
//mount
const blog=require("./routes/blog")
app.use("/api/v1",blog);
 
connectWithDb();

app.listen(PORT,()=>{   
    console.log("APP is stared ");
})   

// app.get("/",(req,res)=>{
//     res.send('<h1>This is my homePage</h1>');
// })