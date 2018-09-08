const mongoose = require("mongoose");
const lessonModel = require("../model/lessonModel");
const Lesson = mongoose.model("Lesson");

exports.getAllLessons = async (ctx) => {
	try{
		let result = await Lesson.find();
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
};

exports.createLesson = async (ctx) => {
	const lesson = new Lesson(ctx.request.body);
	try{
		let result = await lesson.save();
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}

exports.updateLesson = async (ctx) => {
	try{
		let result = await Lesson.findOneAndUpdate({_id: ctx.params.lessonId}, ctx.request.body);
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}

exports.deleteLesson = async (ctx) => {
	try{
		let result = await Lesson.remove({_id: ctx.params.lessonId});
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}