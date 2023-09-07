const mongoose = require("mongoose");

const note = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    text : {
        type : String
    },
    status : {
        type : String
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("notesapps", note);