const express = require('express')
const router = express.Router()
const controller = require('../controllers/musicas-controller')
const cors = require('cors')

router.put('/album/:id', cors(), controller.atualizarAlbum)
router.patch('/album/:id', cors(), controller.updateAlbum)

module.exports = router;