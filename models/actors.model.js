const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const actorsSchema = new Schema({
    name:{
        type:String,
        default:"",
    },
    imgUrl : {
        type:String,
        default:"default-avatar-cast-small.png"
    }
})

module.exports = mongoose.model("actors",actorsSchema)