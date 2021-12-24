const countryModel = require('../../models/country.model.js')
class countryController {
    async getCountryItems(req, res) {
        try {
            const country = await countryModel.find().select("-__v");
            res.json({
                isSuccess: true,
                data: {
                    country
                }
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async addCountry(req, res) {
        try {
            const {
                name
            } = req.body;
            if (!name) {
                return res.json({
                    isSuccess: false,
                    message: "لطفا اسم کشور را وارد کنید"
                })
            }
            const country = await new countryModel({
                name
            });
            country.save();
            res.json({
                isSuccess: true,
                message: "با موفقیت ثبت شد"
            })
        } catch (error) {
            res.json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async updateCountry(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                name
            } = req.body;
            await countryModel.findOneAndUpdate({
                _id: id
            }, {
                name
            })
            res.json({
                isSuccess: true,
                message: "با موفقیت ثبت شده"
            })
        } catch (error) {
            return res.json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async deleteCountry(req, res) {
        try {
            const {
                id
            } = req.params;
            await countryModel.deleteOne({
                _id: id
            });
            res.json({
                isSuccess: true,
                message: "با موفقیت ثبت شد"
            })
        } catch (error) {
            res.json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
}

module.exports = new countryController()