const Category = require("../models/category")

const getAll = async (req, res) => {
	const categories = await Category.find()

	res.json(categories)
}

const getById = async (req, res) => {
	const categoryID = await Category.findById(req.params.id)

	if (!categoryID) return res.status(404).send('La categoria no existe')

	res.json(categoryID)
}

const createCategory = async (req, res) => {
	const newCategory = await Category.create(req.body)
	res.json(newCategory)
}

const updateCategory = async (req, res) => {
	const updatedCategory = await Category.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	)

	if (!updatedCategory) return res.status(404).send('La categoria no existe')

	res.json(updatedCategory)
}

const deleteCategory = async (req, res) => {
	const deletedCategory = await Category.findByIdAndDelete(req.params.id)

	if (!deletedCategory) return res.status(404).send('La categoria no existe')

	res.json(deletedCategory)
}

module.exports = {
	getAll,
	getById,
	createCategory,
	updateCategory,
	deleteCategory,
}