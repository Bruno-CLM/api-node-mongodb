//Initial Config 
require('dotenv').config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())


const personRoute = require('./routes/personRoutes')

//Initial Endpoint 
app.get("/", (req, res) => {
  res.json({message: "Hello World"})
})

app.use('/person',personRoute)

//Config Mongoose
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL)
.then(() => {
  console.log("Conectamos ao banco!")
  app.listen(3000, () => {
    console.log("Server is Runtime!")
  })
})
.catch(
  (err) => {
    console.log(err)
  }
);
