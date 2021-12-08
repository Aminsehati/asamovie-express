const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const app = express();

const database = require('./config/database');
database();

dotenv.config();



const port = process.env.PORT || 5000 
const server = http.createServer(app);
server.listen(port, () => console.log(`App is listening on port ${port}!`))

module.exports = app;
