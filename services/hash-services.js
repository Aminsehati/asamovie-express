const bcrypt = require("bcrypt");
class hashService {
  hashPassword(password) {
    return bcrypt.hash(password, 10);
  }
  verifyPassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
  }
}
module.exports = new hashService();
