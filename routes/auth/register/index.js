const express = require('express');
const router = express.Router();
const registerController = require('../../../controllers/auth/register/index.controller');
router.post("/",registerController.register);
module.exports = router;