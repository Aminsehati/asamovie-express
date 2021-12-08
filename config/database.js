const mongoose = require("mongoose");
const url =
  "mongodb+srv://root:PQOZCCS5W9WDoiQ9@asamovie.xuo5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", (err) => {
    console.log("err", err);
  });
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
  });
};
