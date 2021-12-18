const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const app = express();
const database = require("./config/database");
const cors = require('cors');
database();
var corsOptions = {
    origin: ['https://localhost:3000','https://localhost:5000'],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

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
routes(app);

const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => console.log(`App is listening on port ${port}!`));

module.exports = app;