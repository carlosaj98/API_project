const express = require('express')
const { param, body } = require('express-validator')
const validate = require('../middlewares/validate')
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const movieValidationSchema = [
	body('title')
		.notEmpty()
		.withMessage('El título no puede estar vacío')
		.isString()
		.withMessage('Debe proporcionar un título de texto'),
	
	body('description')
		.notEmpty()
		.withMessage('La descripción no puede estar vacía')
		.isString()
		.withMessage('Debe proporcionar una descripción de texto'),

	body('category')
		.notEmpty()
		.withMessage('Debes especificar una categoría')
		.isMongoId()
		.withMessage('Id invalida'),
	
]

const idValidationSchema = param('id')
	.isMongoId()
	.withMessage('Id invalida')

const router = express.Router()

const MovieControllers = require('../controllers/moviesController')

router.get('/', MovieControllers.getAll)

router.get('/:id', MovieControllers.getById)

router.post(
	'/',
	isAuth,
	isAdmin,
	movieValidationSchema,
	validate,
	MovieControllers.createMovie
)

router.put(
	'/:id',
	isAuth,
	isAdmin,
	movieValidationSchema,
	validate,
	MovieControllers.updateMovie
)

router.delete(
	'/:id',
	isAuth,
	isAdmin,
	validate,
	MovieControllers.deleteMovie
)

module.exports = router