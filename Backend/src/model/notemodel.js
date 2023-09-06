const mongoose = require("mongoose");

const note = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    text : {
        type : String
    },
    category : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("notesapps", note);