const express = require("express")
const router = express.Router()
const Assignment = require("../../schema/assignmentSchema")


router.get("/", (req, res) => {
    console.log(req,res,"dfads")
    Assignment.find()
        .then((result) => {
            res.status(200).json({
                assignmentData: result
            })
        }).catch((error) => {
            console.log(error);
            res.status(200).json({
                error:error
            })

        })
})
// router.post("/", (req, res) => {

//     const product = new Product({
//         title: req.body.Title,
//         price: req.body.Price,
//         description: req.body.Description,
//         category: req.body.Category
//     })
//     product.save()
//         .then((result) => {
//             console.log(result)
//             res.status(200).json({
//                 newProduct: result
//             })
//         }).catch((error) => {
//             console.log(error)
//             res.status(500).json({
//                 error: error
//             })
//         })
// })

module.exports = router