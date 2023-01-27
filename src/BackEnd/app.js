const express= require("express")
const app= express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")



app.use(cors({
    origin:"http://localhost:3000"
}));
//middlewares
app.use(bodyParser.json())
const productRoute = require("./api/route/productData")
const assignmentRoute = require("./api/route/assignment")
const loginRoute = require("./api/route/login")

// const uploadRoute = require("./api/route/upload")
// const { urlencoded } = require("body-parser")
mongoose.connect("mongodb://127.0.0.1:27017/DalalTechnologies",{
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
mongoose.connection.on("error",(error)=>{
    console.log("Error DB is not connected") 
})
mongoose.connection.on("connected",(connected)=>{
    console.log("DB is connected")
})
app.use("/product",productRoute)
app.use("/assignment",assignmentRoute)
app.use("/login",loginRoute)
// app.use("/upload",uploadRoute)

app.use("/", (req,res)=>{
    res.status(404).json({
        msg:"Page is not found"
    })
})

module.exports=app