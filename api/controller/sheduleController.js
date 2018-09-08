const mongoose = require("mongoose");
const sheduleModel = require("../model/sheduleModel");
const Shedule = mongoose.model("Shedule");

exports.getAllShedules = async (ctx) => {
	try{
		let result = await Shedule.find();
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
};

exports.createShedule = async (ctx) => {
	const shedule = new Shedule(ctx.request.body);
	try{
		let result = await shedule.save();
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}

exports.updateShedule = async (ctx) => {
	try{
		let result = await Shedule.findOneAndUpdate({_id: ctx.params.sheduleId}, ctx.request.body);
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}

exports.deleteShedule = async (ctx) => {
	try{
		let result = await Shedule.remove({_id: ctx.params.sheduleId});
		ctx.body = result;
	} catch (err){
		ctx.body = err;
	}
}