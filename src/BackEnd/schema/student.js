const mongoose = require("mongoose");


const studentSchema = mongoose.Schema({
    name:String,
    gender:String,
    phoneNo:Number,
    email:String
})

module.exports=mongoose.model("Student",studentSchema)