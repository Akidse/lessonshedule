const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var sheduleSchema = new Schema({
	day: {
		type: Number,
		default: 0,
	},
	week_fraction: {
		type: Boolean, //boolean 0 or 1, for memory saving(not false or true, 0 - first week, 1 - second week)
		default: 0,
	},
	teacher: {
		type: Schema.Types.ObjectId,
		ref: "Teacher",
		default: null
	},
	queue: {//count in lessons queue for this day
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model("Shedule", sheduleSchema);