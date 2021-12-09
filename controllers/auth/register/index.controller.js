const validation = require("../../../validation");
const User = require("../../../models/user.models");
const hashServices = require("../../../services/hash-services");
const jwtServices = require("../../../services/jwt-services");
class registerController {
  async register(req, res) {
    const { phone, password } = req.body;
    const phoneValidation = validation.phone(phone);
    if (!phone | !password) {
      return res.send({
        isSuccess: false,
        message: "تمامی فیلدها اجباری میباشد",
      });
    }
    if (!phoneValidation) {
      return res.send({
        isSuccess: false,
        message: "شماره وارد شده صحیح نمیباشد",
      });
    }
    try {
      const user = await User.findOne({ phone });
      if (user) {
        return res.send({
          isSuccess: false,
          message: "شماره وارد شده تکراری میباشد",
        });
      }
    } catch (error) {
      return res.send({
        isSuccess: false,
        message: error,
      });
    }
    try {
      const hashPassword = await hashServices.hashPassword(password);
      const newUser = await new User({
        phone,
        password: hashPassword,
      });
      await newUser.save();
      const token = await jwtServices.sign({ _id: newUser._id });
       return res.send({
        isSuccess: true,
        token,
      });
    } catch (error) {
      return res.send({
        isSuccess: false,
        message: error + "error",
      });
    }
  }
}
module.exports = new registerController();
