const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    type:{
        type:String,
        default:""
    },
    imageUrl:{
        type:String,
        default:""
    }
})