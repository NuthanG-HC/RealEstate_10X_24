const express = require('express')
const app = express()
const PORT = 7001
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(express.json())
const main = require('./connect')
const signin = require('./model/signinSchema')
const signup = require('./model/signupSchema')

main()
app.get('/signin',(req,res)=>{
    res.send('ok')
})
app.get('/signup',(req,res)=>{
    res.send('ok')
})



app.listen(PORT,()=>{console.log(`Server is up and running at ${PORT}`)})
