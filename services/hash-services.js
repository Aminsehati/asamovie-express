const bcrypt = require('bcrypt')
class hashService {
      hashPassword(password){
        return   bcrypt.hash(password,10);
    }
}
module.exports = new hashService();