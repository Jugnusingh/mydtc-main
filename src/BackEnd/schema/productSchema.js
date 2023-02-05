const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    Title:String,
    Price:Number,
    Description:String,
    Category:String,
    Textarea: String
    
})

module.exports= mongoose.model("productdatas",productSchema)