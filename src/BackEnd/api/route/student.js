const express = require("express")
const router = express.Router()
const Student = require("../../schema/student")


router.get("/", (req, res) => {
    console.log(req,res,"dfads")
    Student.find()
        .then((result) => {
            console.log(result)
            res.status(200).json({
                studentData: result
            })
        }).catch((error) => {
            console.log(error);
            res.status(200).json({
                error:error
            })

        })
})
router.post("/", (req, res) => {

    const student = new Student({
        name: req.body.name,
        gender: req.body.gender,
        phoneNo: req.body.phone,
        email: req.body.email
    })
    student.save()
        .then((result) => {
            console.log(result)
            res.status(200).json({
                newStudent: result
            })
        }).catch((error) => {
            console.log(error)
            res.status(500).json({
                error: error
            })
        })
})

module.exports = router