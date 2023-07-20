const express = require('express')

const router = express.Router()

const MovieControllers = require('../controllers/moviesController')

router.get('/', MovieControllers.getAll)

router.get('/:id', MovieControllers.getById)

router.post(
	'/',
	MovieControllers.createMovie
)

router.put(
	'/:id',
	MovieControllers.updateMovie
)

router.delete(
	'/:id',
	MovieControllers.deleteMovie
)

module.exports = router