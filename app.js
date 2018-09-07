const Koa = require("Koa");
const app = new Koa;
const lessonModel = require("./api/model/lessonModel");
const sheduleModel = require("./api/model/sheduleModel");
const teacherModel = require("./api/model/teacherModel");

app.use(ctx => {
	ctx.body = 'Hello world';
});

app.listen(3000);