const User = require('../models/user')
const Movie = require("../models/movie")
const isAuth = require('../middlewares/isAuth')

const updateScore = async (req, res) =>{
	const updatedScore = await Movie.findByIdAndUpdate(
		req.params.id,
		{ $push: {votes: req.user.id}, $inc: req.body},
		{ new: true }
	)
    res.json(updatedScore)
}

module.exports = {updateScore}