const express = require('express')
const app = express()
const router = require('./routes/musicasRoutes')

app.use(express.json())
app.use('/', router)


module.exports = app