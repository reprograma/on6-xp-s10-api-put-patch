const express = require('express')
const router = express.Router()
const controller = require('../controllers/games-controller')
const cors = require('cors')

router.put('/games/:id', cors(), controller.atualizar)
router.patch('/games/:id', cors(), controller.update)

module.exports = router;