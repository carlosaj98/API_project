const express = require('express')

const router = express.Router()

const ScoreControllers = require('../controllers/scoreController')

router.put(
	'/:id',
	ScoreControllers.updateScore
)

module.exports = router