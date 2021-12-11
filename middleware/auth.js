const jwtService = require("../services/jwt-services");
const User = require("../models/user.models");
module.exports = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders) {
    return res.status(401).json({
      isSuccess: false,
      message: "unauthorized",
      authHeaders,
    });
  }
  try {
    const token = authHeaders.split(" ")[1];
    const { _id } = await jwtService.verifyToken(token);
    const user = await User.findOne({ _id }).exec();
    req.user = {
        ...req.user,
        phone:user.phone,
        firstName : user?.firstName ,
        lastName : user?.lastName,
        _id : user?._id
    }
    next();
  } catch (error) {
    return res.status(401).json({
      isSuccess: false,
      message: "unauthorized",
    });
  }
};
