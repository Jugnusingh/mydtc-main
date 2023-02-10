const express = require("express")
const router = express.Router()
const Product = require("../../schema/productSchema")


router.get("/", (req, res) => {
    console.log(req,res,"dfads")
    Product.find()
        .then((result) => {
            res.status(200).json({
                productData: result
            })
        }).catch((error) => {
            console.log(error);
            res.status(200).json({
                error:error
            })

        })
})
router.get("/Product", (req, res) => {

    const product = new Product({
        Title: req.body.Title,
        Price: req.body.Price,
        Description: req.body.Description,
        Category: req.body.Category
    })
    product.save()
        .then((result) => {
            console.log(result)
            res.status(200).json({
                newProduct: result
            })
        }).catch((error) => {
            console.log(error)
            res.status(500).json({
                error: error
            })
        })
})

module.exports = router