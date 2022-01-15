const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const commnetSchema = new Schema({
    body: {
        type: String,
        default: ""
    },
    mediaId : {
        type:Schema.Types.ObjectId
    },
    likeCount: {
        type: Number,
        default: 0
    },
    dislikeCount: {
        type: Number,
        default: 0
    },
    profileCaption:{
        type:String,
        default:""
    },
    profileImage:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

module.exports = mongoose.model("comment", commnetSchema)