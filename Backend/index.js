const express = require("express");
const app = express();
const propdetails =  require("./models/propertydetails");
const conn =  require("./connection/conn");
const bodyParser = require("body-parser");
conn()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/propdetails" , async (req,res)=>{
    try{
        const getdata =  await propdetails.find()
        res.status(200).json({
            status :"success",
            getdata
        })
    }catch(e){
        res.status(404).json({
            status :"failed",
           message : e.message
        })
    }
})

// search api 

// app.get("/propdetails/:id , async (req,res)=>{
//     try{
//         const getdata =  await propdetails.find({ppid});
//         res.status(200).json({
//             status :"success",
//             getdata
//         })
//     }catch(e){
//         res.status(404).json({
//             status :"failed",
//            message : e.message
//         })
//     }
// })



app.post("/add" , async (req,res)=>{
    try{
        const data = await propdetails.create(req.body)
        res.status(200).json({
            status :"success",
            data
        })
    }catch(e){
        res.status(404).json({
            status :"failed",
           message : e.message
        })
    }
})






app.listen(3000,()=>{
    console.log("server is up at 3000")
});



