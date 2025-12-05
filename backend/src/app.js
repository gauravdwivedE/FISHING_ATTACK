const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/user.route')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/users", userRouter)

module.exports = app
