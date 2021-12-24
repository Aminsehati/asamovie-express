const express = require('express');
const router = express.Router();
const countryController = require('../../controllers/country/index.controller');
router.get("/",countryController.getCountryItems);
router.post("/",countryController.addCountry);
router.put("/:id",countryController.updateCountry);
router.delete("/:id",countryController.deleteCountry);


module.exports = router