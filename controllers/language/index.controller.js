const languageModel = require('../../models/language.model');
class languageController {
    async getLangauageItems(req, res) {
        try {
            const languages = await languageModel.find().select("-__v ");
            res.json({
                isSuccess: true,
                data: {
                    languages
                }
            })
        } catch (error) {
            res.json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async addLanguage(req, res) {
        try {
            const {
                name
            } = req.body;
            const newLanguage = await new languageModel({
                name
            });
            newLanguage.save();
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
    async updateLanguage(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                name
            } = req.body;
            await languageModel.findOneAndUpdate({_id : id },{
                name
            })
            res.json({
                isSuccess:true,
                message:"با موفقیت ثبت شد"
            })
        } catch (error) {
            res.json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
}

module.exports = new languageController()