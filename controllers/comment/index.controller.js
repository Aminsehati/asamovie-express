const commentModel = require('../../models/comment.model');
class commentController {
    async getlistComment(req, res) {
        try {
            let {
                mediaId
            } = req.body;
            if (!mediaId) {
                mediaId = req.query.mediaId
            }
            const comment = await commentModel.find({
                mediaId
            }).select("-__v").sort({
                createdAt: -1
            })
            res.json({
                isSuccess: true,
                data: {
                    items: comment
                }
            })
        } catch (error) {
            return res.json({
                isSuccess: false,
                mesesage: "خطایی رخ داده است",
                error
            })
        }
    }
    async addComment(req, res) {
        try {
            const {
                firstName,
                imageUrl
            } = req.user;
            const {
                mediaId,
                body
            } = req.body;
            const newComment = await new commentModel({
                body,
                mediaId,
                profileCaption: firstName,
                profileImage: imageUrl,
            })
            await newComment.save();
            res.json({
                isSuccess: true,
                mesesage: "با موفقیت ثبت شد"
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: true,
                mesesage: "خطایی رخ داده است"
            })
        }
    }
    async commnetLike(req, res) {
        try {
            const {
                id
            } = req.params
            const commentItem = await commentModel.findOne({
                _id: id
            });
            const likeCount = commentItem.likeCount + 1 ;
            await commentModel.findOneAndUpdate({_id : id },{
                likeCount
            })
            res.json({
                isSuccess: true,
                message:"با موفقیت ثبت شد"
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: true,
                mesesage: "خطایی رخ داده است"
            })
        }
    }
}

module.exports = new commentController()