const jwt = require("jsonwebtoken");
class jwtService {
  sign(payload, expierd = "864000s", secret = process.env.SECRET_JWT) {
    return jwt.sign(payload, secret, {
      expiresIn: expierd
    });
  }
  async verifyToken(token) {
    return await jwt.verify(token, process.env.SECRET_JWT)
  }
}
module.exports = new jwtService();