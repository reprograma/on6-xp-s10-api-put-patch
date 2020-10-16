const express = require('express')
const router = express.Router()

const controller = require('../controllers/musicasController')
const cors = require('cors')

router.put('/musicas/:id', cors(), controller.atualizar)
router.patch('/musicas/:id', cors(), controller.update)

module.exports = router;