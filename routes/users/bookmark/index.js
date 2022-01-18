const express = require('express');
const router = express.Router();
const bookMarkController = require('../../../controllers/bookmark/index.controller');
router.post("/:id",bookMarkController.addToBookMark);
router.get("/",bookMarkController.getBookMarkItems);
router.get("/:id",bookMarkController.getBookMarkItem);
router.delete("/:id",bookMarkController.deleteBookMark)
module.exports = router ;