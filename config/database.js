const mongoose = require("mongoose");
// kgjR2IV2AXS9sArV
const url =
  "mongodb+srv://root:kgjR2IV2AXS9sArV@asamovie.xuo5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on("error", (err) => {
    console.log("err", err);
  });
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
  });
};