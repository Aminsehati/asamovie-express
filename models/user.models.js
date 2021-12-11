const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const userSchema = new Schema({
    phone:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    },
    firstName:{
        type:String,
        default:""
    },
    lastName:{
        type:String,
        default:""
    }
},{
    timestamps:true
})
module.exports = mongoose.model("users",userSchema)