const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/image');
    },
    filename: function (req, file, cb) {
        cb(null,  file.originalname);
    }
});
const upload = multer({
    storage: storage
});
const actorsController = require('../../controllers/actors/index.controller');
router.post("/", upload.single("file") , actorsController.addActors);
router.get("/",actorsController.getActorsItems);
router.get("/:id",actorsController.getActorsItem);
router.put("/:id",actorsController.updateActorItem);

module.exports = router;