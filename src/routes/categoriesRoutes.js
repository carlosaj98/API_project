const express = require('express')
const { param, body } = require('express-validator')

const CategoryControllers = require('../controllers/categoriesController')

const router = express.Router()

router.get('/', CategoryControllers.getAll)

router.get('/:id', CategoryControllers.getById)

router.post(
	'/',
	CategoryControllers.createCategory
)

router.put(
	'/:id',
	CategoryControllers.updateCategory
)

router.delete(
	'/:id',
	CategoryControllers.deleteCategory
)

module.exports = router
