const User = require("../../../models/user.models");
const hashService = require("../../../services/hash-services");
const jwtService = require("../../../services/jwt-services");
class loginController {
  async login(req, res) {
    let {
      phone,
      password
    } = req.query;
    if (!phone | !password) {
      return res.status(400).json({
        isSuccess: false,
        message: "تمامی فیلدها اجباری میباشد",
      });
    }
    try {
      const user = await User.findOne({
        phone
      });
      if (!user) {
        return res.status(400).json({
          isSuccess: false,
          message: "شماره وارد شده یا رمزعبور اشتباه میباشد",
        });
      }
      const isValidPassword = await hashService.verifyPassword(
        password,
        user.password
      );
      if (!isValidPassword) {
        return res.status(400).json({
          isSuccess: false,
          message: "شماره وارد شده یا رمزعبور اشتباه میباشد",
        });
      }
      const token = await jwtService.sign({
        _id: user._id
      });
      res.json({
        isSuccess: true,
        token,
      });
    } catch (error) {
      return res.status(400).json({
        isSuccess: false,
        message: "خطایی رخ داده است",
        error
      });
    }
  }
}

module.exports = new loginController();