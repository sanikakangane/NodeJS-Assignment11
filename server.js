const express = require("express")
const mongoose = require("mongoose")

const teacherRouter = require("./router/teacherRouter")
const studentRouter = require("./router/studentRouter")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Assignment11")
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch((error) => {
        console.log("MongoDB connection failed", error.message)
    })

app.use("/teacher", teacherRouter)
app.use("/student", studentRouter)

app.listen(1888, () => {
    console.log("Server running on port 1888...")
})