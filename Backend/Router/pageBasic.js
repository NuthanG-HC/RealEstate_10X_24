const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const Routes1 = express.Router();
Routes1.use(bodyParser.urlencoded({ extended: false }))
Routes1.use(bodyParser.json())
const page = require('../model/propertyPage')

Routes1.post('/pagelist',async(req,res)=>{
    console.log('ok')
    const {property,contact,area,views,daysLeft} = req.body 
    try{
        const details = await page.create({
            property:property,
            contact:contact,
            area:area,
            views:views,
            daysLeft:daysLeft
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


module.exports = Routes1