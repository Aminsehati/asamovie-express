const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user/index.controller');
router.get("/",userController.userInfo);
router.put("/",userController.updateUserInfo);

module.exports = router;
