const jwt = require("jsonwebtoken");
class jwtService {
  sign(payload, expierd = "2d", secret = process.env.SECRET_JWT) {
    return jwt.sign(payload, secret, { expiresIn: expierd });
  }
  verifyToken(token) {
    return jwt.verify(token, process.env.SECRET_JWT);
  }
}
module.exports = new jwtService();
