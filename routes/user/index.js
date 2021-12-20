const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/image');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({
    storage: storage
});
const userController = require('../../controllers/user/index.controller');
router.get("/", userController.userInfo);
router.put("/", upload.single("file"), userController.updateUserInfo);

module.exports = router;