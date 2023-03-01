const express = require('express')
const app = express()
const PORT = 7001
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(express.json())
const cors = require("cors")
const main = require('./connect')
const Routes1 =require('./Router/pageBasic')

main()
app.use(cors())
app.use(Routes1);




app.listen(PORT,()=>{console.log(`Server is up and running at ${PORT}`)})
