const jwt = require("jsonwebtoken");
class jwtService {
  sign(payload, expierd = "864000s", secret) {
    return jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: expierd });
  }
}
module.exports = new jwtService();
