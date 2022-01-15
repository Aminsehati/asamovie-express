const express = require('express');
const router = express.Router();
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/image');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage
});
const movieController = require('../../controllers/Movie/index.controller');
router.post("/", upload.single("file"), movieController.addMovie);
router.get("/", movieController.getMovieItems);
router.put("/:id", upload.fields([{
    name: "imageCoverMovie"
}, {
    name: "imageLogoMovie"
}, {
    name: "imageUrl"
}]), movieController.updateMovieItem);
router.get("/:id", movieController.getMovieItem);

module.exports = router