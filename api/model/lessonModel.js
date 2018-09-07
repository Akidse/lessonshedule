const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var lessonSchema = new Schema({
	name: {
		type: String,
		default: null,
		required: "Lesson must have name!"
	},
	teacher: {
		type: [Schema.Types.ObjectId],
		ref: "Teacher",
		required: "Lesson must have teacher attached!"
	},
	type: {
		type: String,
		default: "lesson"
	}
});

module.exports = mongoose.model("Lesson", lessonSchema);