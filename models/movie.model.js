const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {
        type: String,
        default: "",
        required: true
    },
    title_original:{
        type:String,
        default:"",
        required:true
    },
    year: {
        type: Number,
        required: true
    },
    imdb:{
        type:Number,
        default:0,
        required:true,
    },
    imgUrl:{
        type:String,
        default:"",
        required:true,
    },
    Summary:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    category:{
        type:Array,
        default:[]
    },
    countries:{
        type:Array,
        default:[]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("movies", movieSchema)