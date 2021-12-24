const User = require('../../models/user.models');
class userController {
  async userInfo(req, res) {
    try {
      res.json({
        isSuccess:true,
        data : {
          ...req.user
        }
      })
    }catch (e) {
      return res.status(400).json({
        isSuccess:false,
        message:"کاربر موردنظر یافت نشد"
      })
    }
  }
  async updateUserInfo(req,res){
    try {
      const { phone , firstName , lastName } = req.body ;
      const { _id } = req.user;
      const user = await  User.updateOne({_id},{
        $set:{
          phone,
          firstName,
          lastName,
          imageUrl:req.file.path
        }
      })
      res.json({
        isSuccess:true,
        message:"تغییرات موردنظر با موفقیت ثبت شد"
      })
    }catch (e) {
      return res.status(404).json({
        isSuccess:false,
        message : "کاربر موردنظر یافت نشد"
      })
    }
}
}
module.exports = new userController();
