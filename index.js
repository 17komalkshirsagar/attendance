const express = require("express")
const mongoose = require("mongoose")

const cors = require("cors")

require("dotenv").config({ path: "./.env" })


//db
mongoose.connect(process.env.MONGO_URL)//DATA baseconcation sathi
const app = express()//body parse sathi express() je pn return krete app store hote




//middleware

app.use(express.json()) //front and backden conncation sathi
app.use(cors())

//routes
app.use("/api/admin", require("./routes/adminRoute"))


//404
app.use("*", (req, res) => {

    res.status(404).json({ message: "resource not found" })
})
//error handalder
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "something went wrong" })
})


mongoose.connection.once("open", () => {
    console.log("mongoose CONNCENT")
    app.listen(process.env.PORT, console.log("SERVER Runinng"))
})