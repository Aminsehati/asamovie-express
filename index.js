const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 5000 
const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})