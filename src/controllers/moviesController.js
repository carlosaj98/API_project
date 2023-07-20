const Movie = require("../models/movie")
const Category = require('../models/category')
const User = require('../models/user')

const getAll = async (req, res) => {
	const movies = await Movie.find()

	res.json(movies)
}

const getById = async (req, res) => {
	const MovieID = await Movie.findById(req.params.id)

	if (!MovieID) return res.status(404).send('La pelicula no existe')

	res.json(MovieID)
}

const createMovie = async (req, res) => {
	// const newMovie = await Movie.create(req.body)
	const newMovie = req.body
	const movie = await Movie.create(newMovie)
	
	await Category.findByIdAndUpdate(newMovie.category, {
		$push: { movies: movie.id },
	})
	
	res.json(movie)
}

const updateMovie = async (req, res) => {
	const updatedMovie = await Movie.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	)

	if (!updatedMovie) return res.status(404).send('La pelicula no existe')

	res.json(updatedMovie)
}

const deleteMovie = async (req, res) => {
	const movie = await Movie.findById(req.params.id)

	await Category.findByIdAndUpdate(movie.category, {
		$pull: { movies: movie.id },
	})
	const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
		
	if (!deletedMovie) return res.status(404).send('La pelicula no existe')

	res.json(deletedMovie)
}

module.exports = {
	getAll,
	getById,
	createMovie,
	updateMovie,
	deleteMovie,
}