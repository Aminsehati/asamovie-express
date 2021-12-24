const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const languageSchema = new Schema({
    name:{
        type:String,
        default:""
    }
},{
    timestamps:true,
});
module.exports = mongoose.model("language",languageSchema)