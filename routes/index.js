const registerRouter = require("./auth/register");
const loginRouter = require("./auth/login");
module.exports = (app) => {
  app.use("/api/v1/register", registerRouter);
  app.use("/api/v1/login", loginRouter);
};
