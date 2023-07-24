const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types

const movieSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
    description: { type: String, required: true},
    category: {type: ObjectId, ref: "Category", required: true},
    votes: [{type: ObjectId, ref: "User"}],
    score: {type: Number, min: 0, max: 10, default: 0}
})



const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie