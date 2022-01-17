const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    phone: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    bookMark: [{
        _id: {
            type: Schema.Types.ObjectId
        },
        title: {
            type: String,
            default: ""
        },
        title_original: {
            type: String,
            default: ""
        },
        year: {
            type: Number,
            default: 2020
        },
        imdb: {
            type: Number,
            default: 0
        },
        imgUrl: {
            type: String,
            default: ""
        }
    }]
}, {
    timestamps: true
})
module.exports = mongoose.model("users", userSchema)