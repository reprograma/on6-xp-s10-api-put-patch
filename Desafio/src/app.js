const express = require ('express')

const app = express()

const router = require ('./routers/games-routers')

app.use(express.json()) //parsear o resultado em json
app.use('/', router)

module.exports = app;