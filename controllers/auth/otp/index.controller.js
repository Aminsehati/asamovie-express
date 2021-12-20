const validate = require('../../../validation');
const otpService = require('../../../services/otp-services');
class otpController {
    async sendOtp(req, res) {
        try {
            const {
                phone
            } = req.body;
            const isValidPhone = validate.phone(phone);
            if (!isValidPhone) {
                return res.json({
                    isSuccess: true,
                    message: "شماره وارد شده صحیح نمیباشد"
                })
            }
            const otp = await otpService.genrateOtp();
            res.json({
                isSuccess: true,
                data: {
                    otp
                }
            })
        } catch (error) {
            return res.json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
}
module.exports = new otpController();