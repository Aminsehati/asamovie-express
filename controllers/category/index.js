const categoryModel = require('../../models/category.model');
class categoryController {
    async addCategory(req, res) {
        try {
            const {
                title
            } = req.body;
            if (!title) {
                return res.json({
                    isSuccess: true,
                    message: "لطفا عنوان دسته بندی را وارد کنید"
                })
            }
            const category = await new categoryModel({
                title
            });
            await category.save();
            res.json({
                isSuccess: true,
                message: "با موفقیت ثبت شد"
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async getCategoryItems(req, res) {
        try {
            let {
                skip = 1,
                limit = 10
            } = req.query;
            if(!skip || !limit ){
                skip = req.body.skip;
                limit = req.body.limit;
            }

            const categories = await categoryModel.find().select('-__v');
            const filtersCategories = await categoryModel.find().select('-__v').limit(limit * 1).skip((skip - 1) * limit);
            res.json({
                isSuccess: true,
                data: {
                    items: filtersCategories,
                    tottalCount: categories.length
                }
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async updateCategory(req, res) {
        try {
            const {
                title
            } = req.body;
            const {
                id
            } = req.params;
            await categoryModel.findOneAndUpdate({
                _id: id
            }, {
                title
            });
            res.json({
                isSuccess: true,
                message: "با موفقیت انجام شد"
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است",
                error
            })
        }
    }
    async deleteCategory(req, res) {
        try {
            const {
                id
            } = req.params;
            await categoryModel.findOneAndRemove({
                _id: id
            });
            res.json({
                isSuccess: true,
                message: "با موفقیت انجام شد"
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: false,
            })
        }
    }
}

module.exports = new categoryController();