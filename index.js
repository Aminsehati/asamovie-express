const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const app = express();

dotenv.config();


app.get("/",(req,res)=>{
    res.json({
        isSuccess:false,
    })
})

const port = process.env.PORT || 5000 
const server = http.createServer(app);
app.listen(port, () => console.log(`App is listening on port ${port}!`))

module.exports = app;
