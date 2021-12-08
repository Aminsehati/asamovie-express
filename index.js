const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const app = express();

dotenv.config();


app.get("/",(req,res)=>{
    res.send("Hello world");
})

const port = process.env.PORT || 5000 
const server = http.createServer(app);

module.exports = app;
