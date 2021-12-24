const registerRouter = require("./auth/register");
const loginRouter = require("./auth/login");
const userRouter = require('./user');
const sendOtp = require("./auth/send-otp");
const categoryRouter = require('./category/index');

const auth = require('../middleware/auth');
module.exports = (app) => {
  app.use("/api/v1/register", registerRouter);
  app.use("/api/v1/login", loginRouter);
  app.use("/api/v1/account/user",auth , userRouter);
  app.use("/api/v1/send-otp", sendOtp);
  app.use("/api/v1/category", categoryRouter);
};
