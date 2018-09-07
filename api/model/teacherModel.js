const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var teacherSchema = new Schema({
	name: {
		type: String,
		required: "Name cannot be empty"
	},
	third_name: {
		type: String,
		required: "Third name cannot be empty"
	},
	last_name: {
		type: String,
		required: "Last name cannot be empty"
	}
});

module.exports = mongoose.model("Teacher", teacherSchema);