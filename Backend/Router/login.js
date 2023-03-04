const express = require('express')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require("../model/signupSchema");
const jwt = require("jsonwebtoken")

const secret = "nuthanEstate"

router.use(express.json())
router.use(express.urlencoded())

router.post('/login', async (req, res) => {

    try {
        const email= req.body.id
        const passwords = req.body.password
        const findQueryinDB = await User.findOne({ MailID: email });
        console.log(findQueryinDB)

        if (!findQueryinDB) {
            return res.status(404).json({
                status: "Error",
                message: "User isn't register,please register before signin"
            });

        } else {
            //  for passwordvallidation
            console.log(req.body)

            //privacy
            bcrypt.compare(passwords, findQueryinDB.password, (err, result) => {
                //authentication process by bcrypt

                console.log(result, "from bcrypt")
                if (!result) {
                    return res.status(403).json({
                        status: "Failed",
                        message: "Invalid User Password"
                    })
                }
                else {
                    //after authentication we have to authorize the user by sending token to user
                    const token = jwt.sign({
                        // 60 hours from the current time.
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 60),
                        findQueryinDB: findQueryinDB._id
                    }, secret);

                    const userdetails = { ...findQueryinDB._doc, password: undefined }
                    return res.status(200).json({
                        status: "Success",
                        message: { token, userdetails }
                    })
                }
            })

        }

    } catch (err) {
        console.log(err)
    }
})

module.exports = router