const express = require('express');
const router = express.Router();
const otpController = require('../../../controllers/auth/otp/index.controller');

router.post("/",otpController.sendOtp)
module.exports = router