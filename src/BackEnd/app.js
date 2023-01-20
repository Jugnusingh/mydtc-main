const express= require("express")
const app= express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


//middlewares
app.use(bodyParser.json())

// const studentRoute = require("./api/route/student")
// const facultyRoute = require("./api/route/faculty")
const productRoute = require("./api/route/productData")
const assignmentRoute = require("./api/route/assignment")

mongoose.connect("mongodb://127.0.0.1:27017/DalalTechnologies",{
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
//   .then((result)=>{
//     console.log(result,"DB is connected successfully")
//   }).catch((error)=>{
//     console.log(error,"Error DB is not connected")
//   })
mongoose.connection.on("error",(error)=>{
    console.log("Error DB is not connected") 
})
mongoose.connection.on("connected",(connected)=>{
    console.log("DB is connected")
})
// app.use("/student",studentRoute)
// app.use("/faculty",facultyRoute)
app.use("/product",productRoute)
app.use("/assignment",assignmentRoute)
app.use("/", (req,res)=>{
    res.status(404).json({
        msg:"Page is not found"
    })
})

module.exports=app