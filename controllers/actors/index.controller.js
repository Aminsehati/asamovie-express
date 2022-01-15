const actorsModel = require('../../models/actors.model');
class actosController {
    async addActors(req, res) {
        try {
            const {
                name
            } = req.body;
            const imageActors = req ?.file?.filename
            const actors = await new actorsModel({
                name,
                imgUrl: imageActors
            });
            await actors.save();
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
    async getActorsItems(req, res) {
        try {
            const actors = await actorsModel.find().select("-__v")
            res.json({
                isSuccess: true,
                data: {
                    actors
                }
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: false,
                message: "خطایی رخ داده است"
            })
        }
    }
    async getActorsItem(req, res) {
        try {
            const {
                id
            } = req.params;
            const actorItem = await actorsModel.findOne({_id : id}).select("-__v");
            res.json({
                isSuccess:true,
                data : {
                    actorItem
                }
            })
        } catch (error) {
            return res.status(404).json({
                isSuccess: false,
                message: "یافت نشد"
            })
        }
    }
    async updateActorItem(req,res){
        try {
            const { name } = req.body ;
            const { id } = req.params ;
            const imageActors = req ?.file?.filename;
            await actorsModel.findOneAndUpdate({_id : id},{
                name ,
                imgUrl : imageActors
            })
            res.json({
                isSuccess:true,
                message:"با موفقیت ثبت شد"
            })
        } catch (error) {
            return res.status(404).json({
                isSuccess:false,
                message:"یافت نشد"
            })
        }
    }
}

module.exports = new actosController()