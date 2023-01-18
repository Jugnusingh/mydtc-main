const express = require("express")
const router = express.Router()
router.post('/',(req,res)=>{
    res.status(200).json({
        msg:"faculty post"
    })
})

module.exports = router