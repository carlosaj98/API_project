const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types

const categorySchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
    movies: [{type: ObjectId, ref: "Movie"}]
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category