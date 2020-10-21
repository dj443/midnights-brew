const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    fName:{
        type: String,
        require: true
    },
    lName:{
        type: String,
        require: true
    },
    userName:{
        type: String,
        require: true
    }
});

module.exports = item = mongoose.model("item", ItemSchema);