const express = require("express")
const routes = require("./routes/api")

const mongoose = require("mongoose")

const bodyParser = require("body-parser")
//Set up express app
const app = express()

//connect to mongodb
mongoose.connect("mongodb+srv://Dannynutdude:Goaway123@property24-z6bx5.mongodb.net/test", {useNewUrlParser: true})
//var db = mongoose.connection

app.use(bodyParser.json())

//initialise routes
app.use("/api", routes)

//module.exports = db

//Listen for requests
app.listen(process.env.port || 4000, function(){
        console.log("Listening for requests on port 4000")
})