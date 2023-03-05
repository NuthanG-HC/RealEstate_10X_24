const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

function main(){
    mongoose.connect('mongodb+srv://Nuthan:nuthan123@cluster0.y1tv2xl.mongodb.net/realEstate?retryWrites=true&w=majority',{useNewUrlParser:true ,useUnifiedTopology:true},()=>{
        console.log("Successfully connected to DataBase");
    })
    
}


module.exports = main
