const express = require('express')
const controller = require('../controller/albumController')
const router = express.Router()
const cors = require('cors')

router.put('/album/:id', cors(), controller.atualizaAlbum)
router.patch('/album/:id', cors(), controller.updateAlbum)

module.exports = router