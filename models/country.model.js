const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const countrySchema = new Schema({
    name: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("country",countrySchema)