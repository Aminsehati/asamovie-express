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
            }).select("_id title title_original year imdb imgUrl category");
            const user = req.user;
            const indexhasBookmark = user.bookMark.findIndex(item => item._id === id);
            if (indexhasBookmark > -1) {
                return res.status(400).json({
                    isSuccess: false,
                })
            } else {
                await userModel.findOneAndUpdate({
                    _id: user._id
                }, {
                    $push: {
                        bookMark: mediaItem
                    }
                })
                console.log(mediaItem);
            }
            res.json({
                isSuccess: true,
                message: "با موفقیت ثبت شد",
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
            const user = req.user;
            const hashBookMark = user.bookMark.find(bookMark => bookMark._id.toString() === id);
            res.json({
                isSuccess: true,
                hashBookMark: !!hashBookMark
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است",
                error
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