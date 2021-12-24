const express = require('express');
const router = express.Router();
const categoryController = require("../../controllers/category/index");
router.post("/",categoryController.addCategory);
router.get("/",categoryController.getCategoryItems);
router.put("/:id",categoryController.updateCategory);
router.delete("/:id",categoryController.deleteCategory);
module.exports = router;