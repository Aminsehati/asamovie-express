const express = require('express')
const router = express.Router();

const languageController = require('../../controllers/language/index.controller');


router.get("/",languageController.getLangauageItems);
router.post("/",languageController.addLanguage);

module.exports = router
