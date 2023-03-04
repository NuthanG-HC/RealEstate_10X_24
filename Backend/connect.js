const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

function main(){
    mongoose.connect(process.env.URL,{useNewUrlParser:true ,useUnifiedTopology:true},()=>{
        console.log("Successfully connected to DataBase");
    })
    
}


module.exports = main