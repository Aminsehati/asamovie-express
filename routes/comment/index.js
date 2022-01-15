const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js')
const commentController = require('../../controllers/comment/index.controller');

router.get("/", commentController.getlistComment);
router.post("/", auth, commentController.addComment);

router.post("/:id/like",commentController.commnetLike)

module.exports = router;