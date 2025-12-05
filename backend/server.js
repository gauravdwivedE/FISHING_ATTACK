require('dotenv').config()
const app = require('./src/app')
const dbConnect = require('./src/db/db')

app.listen(3000, () => {
    console.log("Server is running of port ",3000);
    dbConnect()
})