const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const app = express();
const database = require("./config/database");
const path = require('path');
const cors = require('cors');
database();

app.use(cors())

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const routes = require("./routes");
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use("/uploads", express.static("uploads"))
routes(app);

const port = process.env.PORT || 7600;
const server = http.createServer(app);
server.listen(port, () => console.log(`App is listening on port ${port}!`));

module.exports = app;