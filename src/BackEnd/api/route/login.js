const express = require("express")
const router = express.Router()
const LoginRoute = require("../../schema/loginSchema")


router.post("/login",(req,res)=>{
    console.log(req.body.username)
    const loginRoute = new LoginRoute({
        Username: req.body.username,
        Password: req.body.password,
    })
    loginRoute.save()
        .then((result) => {
            console.log(result,"gazal")
            res.status(200).json({
                newLogin: result
            })
        }).catch((error) => {
            console.log(error)
            res.status(500).json({
                error: error
            })
        })
})


module.exports = router