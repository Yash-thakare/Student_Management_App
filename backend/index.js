const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT   || 4500;

dotenv.config();


app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect('mongodb+srv://yrthakare2211:cMg63fjNw3THLvE8@smadb.2qrb6.mongodb.net/StudentDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
























