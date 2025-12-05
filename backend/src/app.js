const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/user.route')

app.use(cors({
    origin: "https://fishing-attack-2.onrender.com",
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/users", userRouter)

module.exports = app
