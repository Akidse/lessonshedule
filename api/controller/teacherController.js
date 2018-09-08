const mongoose = require("mongoose");
const teacherModel = require("../model/teacherModel");
const Teacher = mongoose.model("Teacher");

exports.getAllTeachers = async (ctx) => {
	try{
		let result = await Teacher.find();
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
};

exports.createTeacher = async (ctx) => {
	const teacher = new Teacher(ctx.request.body);
	try{
		let result = await teacher.save();
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}

exports.updateTeacher = async (ctx) => {
	try{
		let result = await Teacher.findOneAndUpdate({_id: ctx.params.teacherId}, ctx.request.body);
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}

exports.deleteTeacher = async (ctx) => {
	try{
		let result = await Teacher.remove({_id: ctx.params.teacherId});
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}