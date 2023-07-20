const User = require('../models/user')
const Movie = require("../models/movie")

const updateScore = async (req, res) =>{
	const updatedScore = await Movie.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	)

    res.json(updatedScore)
}

module.exports = {updateScore}