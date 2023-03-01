const mongoose = require('mongoose')

const propertyPage = mongoose.Schema({
   property:{type: Number ,required:true},
   contact:{type: Number ,required:true},
   area:{type: Number ,required:true},
   views:{type: Number ,required:true},
   daysLeft:{type: Number ,required:true},
})


const property = mongoose.model("property",propertyPage)
module.exports = property