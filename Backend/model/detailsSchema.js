const mongoose = require("mongoose");
const detailsSchema = new mongoose.Schema({
    property:{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    },

    area:{
        type:String,
        required:true
    },

    views:{
        type:String,
        required:true
    },

    daysleft:{
        type:String,
    },

    status:{
        type:String,
    }
}) 


const details = mongoose.model("details" ,detailsSchema);
module.exports = details;