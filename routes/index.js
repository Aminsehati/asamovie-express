const registerRouter = require("./auth/register");
const loginRouter = require("./auth/login");
const userRouter = require('./user');
const sendOtp = require("./auth/send-otp");
const categoryRouter = require('./category/index');
const countryRouter = require('./country');
const languageRouter = require('./language');
const auth = require('../middleware/auth');
const movieRouter = require('./movie');
module.exports = (app) => {
  app.use("/api/v1/auth/register", registerRouter);
  app.use("/api/v1/auth/login", loginRouter);
  app.use("/api/v1/account/user",auth , userRouter);
  app.use("/api/v1/send-otp", sendOtp);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/country", countryRouter);
  app.use("/api/v1/language", languageRouter);
  app.use("/api/v1/movie", movieRouter);
};
