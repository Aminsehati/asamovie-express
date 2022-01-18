const movieModel = require('../../models/movie.model');
const userModel = require('../../models/user.models')
class bookmarkController {
    async addToBookMark(req, res) {
        try {
            const {
                id
            } = req.params;
            const mediaItem = await movieModel.findOne({
                _id: id
            }).select("_id title title_original year imdb imgUrl");
            const user = req.user;
            const hasMediaToBookMark = await userModel.findOne({
                bookMark: {
                    $elemMatch: {
                        _id: id
                    }
                }
            })
            if (!hasMediaToBookMark) {
                await userModel.findOneAndUpdate({
                    _id: user._id
                }, {
                    $push: {
                        bookMark: mediaItem
                    }
                })
            }
            res.json({
                isSuccess: true,
                message: "با موفقیت ثبت شد"
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async getBookMarkItems(req, res) {
        try {
            const bookMarkItems = req.user.bookMark;
            res.json({
                isSuccess: true,
                bookMarkItems
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async getBookMarkItem(req, res) {
        try {
            const {
                id
            } = req.params;
            const hashBookMark = await userModel.findOne({
                bookMark: {
                    $elemMatch: {
                        _id: id
                    }
                }
            })
            res.json({
                isSuccess: true,
                hashBookMark: !!hashBookMark
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: true,
                message: "خطایی رخ داده است"
            })
        }
    }
    async deleteBookMark(req, res) {
        try {
            const {
                id
            } = req.params;
            const user = req.user;
            res.json({
                isSuccess: true,
                message: "با موفقیت حذف شد"
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: false,
                message: "یافت نشد"
            })
        }
    }
}

module.exports = new bookmarkController()