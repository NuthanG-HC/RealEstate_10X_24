const mongoose = require('mongoose')

const propertyPage = mongoose.Schema({
   
   property:{type: String ,required:true},
   contact:{type: String ,required:true},
   area:{type: String ,required:true},
   views:{type: String ,required:true},
   daysLeft:{type: String ,required:true},
})


const property = mongoose.model("property",propertyPage)
module.exports = property