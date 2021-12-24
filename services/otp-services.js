const crypto = require('crypto')
class otpService {
    genrateOtp(){
        const otp = crypto.randomInt(999,9999);
        return otp
    }
}
module.exports = new otpService();