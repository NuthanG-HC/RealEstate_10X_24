const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://Nuthan:nuthan123@cluster0.y1tv2xl.mongodb.net/realEstate?retryWrites=true&w=majority")

 async function Connect() {
     await mongoose.connect("mongodb+srv://root:realstate@cluster0.c4b2ym5.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = Connect ;