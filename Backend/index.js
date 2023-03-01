const express = require('express')
const app = express()
const PORT = 7001
const cors = require('cors')
const bodyparser = require('body-parser');



const main = require('./connect')
const signin = require('./model/signinSchema')
const signup = require('./model/signupSchema')
const details = require('./model/detailsSchema');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));



main()
app.get('/signin',(req,res)=>{
    res.send('ok')
})
app.get('/signup',(req,res)=>{
    res.send('ok')
})


app.get("/", async(req,res)=>{
    try{
    
            res.send("not found");
        }
    catch(e){
        res.status(404).send({e});
    }
    
})









app.listen(PORT,()=>{console.log(`Server is up and running at ${PORT}`)});
