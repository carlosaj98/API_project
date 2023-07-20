require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')

module.exports = function (app) {
	app.use(json())
	app.use(morgan('tiny'))

	app.use('/api/users', require('../routes/usersRoutes'))

}