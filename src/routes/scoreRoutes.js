const express = require('express')
const { param, body } = require('express-validator')
const validate = require('../middlewares/validate')
const isAuth = require('../middlewares/isAuth')

const scoreValidationSchema = [
	body('score')
		.notEmpty()
		.withMessage('La puntuación no puede estar vacía')
		.isNumeric()
		.withMessage('La puntuación debe ser un numero'),
]

const idValidationSchema = param('id')
	.isMongoId()
	.withMessage('Id invalida')

const router = express.Router()

const ScoreControllers = require('../controllers/scoreController')

router.put(
	'/:id',
	isAuth,
	scoreValidationSchema,
	validate,
	ScoreControllers.updateScore
)

module.exports = router