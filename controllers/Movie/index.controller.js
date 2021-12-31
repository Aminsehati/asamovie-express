const movieModel = require('../../models/movie.model');
const categoryModel = require('../../models/category.model');
class movieController {
    async addMovie(req, res) {
        try {
            const {
                title,
                year,
                imdb,
                title_original
            } = req.body;
            if (!title || !year || !imdb || !title_original) {
                return res.json({
                    isSuccess: true,
                    message: "لطفا تمام فیلد ها را وارد کنید"
                })
            }
            const movie = await new movieModel({
                title,
                year,
                imdb,
                title_original,
                imgUrl: req.file.filename
            })
            movie.save()
            res.json({
                isSuccess: true,
                message: "با موفقیت ثبت شد"
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است",
                error
            })
        }
    }
    async getMovieItems(req, res) {
        try {
            const movie = await movieModel.find().select('-__v');
            res.json({
                isSuccess: true,
                data: {
                    movie
                }
            })
        } catch (error) {
            res.json({
                isSuccess: true,

            })
        }
    }
    async updateMovieItem(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                title,
                title_original,
                year,
                imdb,
                Summary,
                description,
                category
            } = req.body;
            // const categoryItems = await categoryModel.find(category);
            const categoryItems = await categoryModel.find({
                _id: category
            });
            await movieModel.findOneAndUpdate({
                _id: id
            }, {
                title,
                title_original,
                year,
                imdb,
                Summary,
                description
            })
            res.json({
                isSuccess: true,
                categoryItems
            })
            // res.json({
            //     isSuccess: true,
            //     message: "با موفقیت ثبت شد"
            // })
        } catch (error) {
            res.json({
                isSuccess: false,
                message: "خطایی رخ داده است",
                error
            })
        }
    }
    async getMovieItem(req, res) {
        try {
            const {
                id
            } = req.params
            const movie = await movieModel.findOne({
                _id: id
            }).select("-__v");
            res.json({
                isSuccess: true,
                data: {
                    movie
                }
            })
        } catch (error) {
            return res.status(404).json({
                isSuccess: false,
                message: "یافت نشد"
            })
        }
    }
}
module.exports = new movieController()