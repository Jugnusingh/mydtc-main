const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const multer = require("multer")

//middlewares
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(bodyParser.json())

// route path
const productRoute = require("./api/route/productData")
const assignmentRoute = require("./api/route/assignment")
const loginRoute = require("./api/route/login")
const imgRoute = require("./api/route/upload")

// const uploadRoute = require("./api/route/upload")


// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/DalalTechnologies", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on("error", (error) => {
    console.log("Error DB is not connected")
})
mongoose.connection.on("connected", (connected) => {
    console.log("DB is connected")
})


//Multer - Images & File Uplodes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images")

    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

app.post("/public/Images", upload.single("image"), (req, resp) => {
    console.log(req)

})

//api paths
app.use("/product", productRoute)
app.use("/assignment", assignmentRoute)
app.use("/login", loginRoute)
app.use("/images", loginRoute)


// app.use("/upload",uploadRoute)
app.use("/", (req, res) => {
    res.status(404).json({
        msg: "Page is not found"
    })
})

module.exports = app