const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()

const routes = require('./routes')

mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected to MongoDB 💚")
    })
    .catch(err => {
        console.error("Connection error", err)
    })

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3001, () => {
    console.log('Server On 💚')
})