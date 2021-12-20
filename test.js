const crypto = require('crypto')
const otp = crypto.randomInt(999,9999)
console.log(otp);