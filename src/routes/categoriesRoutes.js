const express = require('express')
const { param, body } = require('express-validator')
const validate = require('../middlewares/validate')
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const categoryValidationSchema = [
	body('title')
		.notEmpty()
		.withMessage('El título no puede estar vacío')
		.isString()
		.withMessage('Debe proporcionar un título de texto'),
]

const idValidationSchema = param('id')
	.isMongoId()
	.withMessage('Id invalida')

const CategoryControllers = require('../controllers/categoriesController')

const router = express.Router()

router.get('/', CategoryControllers.getAll)

router.get('/:id', idValidationSchema, validate, CategoryControllers.getById)

router.post(
	'/',
	isAuth,
	isAdmin,
	categoryValidationSchema,
	validate,
	CategoryControllers.createCategory
)

router.put(
	'/:id',
	isAuth,
	isAdmin,
	categoryValidationSchema,
	validate,
	CategoryControllers.updateCategory
)

router.delete(
	'/:id',
	isAuth,
	isAdmin,
	validate,
	CategoryControllers.deleteCategory
)

module.exports = router
