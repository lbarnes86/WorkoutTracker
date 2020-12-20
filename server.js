const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")


const app = express()
const PORT = process.env.PORT || 3000


app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://lbarnes86-user:wAqhdlIildxyAbOA@cluster0.itjgd.mongodb.net/workout"
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


app.use(require("./routes/apiroutes.js"))
app.use(require("./routes/htmlroutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})