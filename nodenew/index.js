require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());

connectDB;

const userRouter = require('./router/userRouter');
app.use("/api",userRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port ${process.env.PORT}`);
})