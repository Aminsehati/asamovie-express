const express = require('express');
const router = express.Router();

const loginController = require('../../../controllers/auth/login/index.controller');
router.post("/",loginController.login);

module.exports = router