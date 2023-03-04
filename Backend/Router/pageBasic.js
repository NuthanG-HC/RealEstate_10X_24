const express = require("express");

const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')

const Routes1 = express.Router();

Routes1.use(bodyParser.urlencoded({ extended: false }))
Routes1.use(bodyParser.json())
Routes1.use(fileUpload());
const page = require('../model/propertyPage');


Routes1.post('/pagelist',async(req,res)=>{
    console.log(req.body)
    let {property,contact,area,views,daysleft,status,PPID} = req.body 
    if(status == 'Sold') {
        daysleft = "00"
    }
    try{
        const details = await page.create({
            property:property,
            contact:contact,
            area:area,
            views:views,
            daysLeft:daysleft,
            status:status,
            PPID:PPID
        })
        res.status(200).json({
            message:"successfully added the data",
            details
        })
    }
    catch (e){
        res.status(500).json({
            message:"error found while adding",
            msg:e.msg
        })

    }

})
Routes1.get('/pagelist',async(req,res)=>{
    try{
    const data = await page.find()
    res.status(200).json({
        message:"data found",
        data
    })
    }
    catch(e){
       res.status(500).json({
        message:"error found no data"
       })
    }
})
Routes1.get('/pagelist/:id',async(req,res)=>{
    // const search = await page
    try{
    const search = `\^${req.params.id}`
    const data = await page.find({PPID:{$regex:search}})
    res.status(200).json({
        message:"data found",
        data
    })
    }
    catch(e){
        res.status(500).json({
         message:"error found no data"
        })
     }
    
})

module.exports = Routes1