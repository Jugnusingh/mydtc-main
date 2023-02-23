const express = require('express')
const multer = require('multer')
const app = express()

const Upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "upload")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".png")
        }
    })

}).single("user_file")
app.post("/public/Images", Upload, (req, resp) => {
    resp.send('file uploaded')

})
app.listen(4000);
