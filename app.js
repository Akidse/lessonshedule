const Koa = require("Koa");
const app = new Koa;
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");

const router = require("./api/route/index");

mongoose.connect("mongodb://akidse:JairImvoybEpnu6@ds249092.mlab.com:49092/lessonshedule", {useNewUrlParser : true});
var db = mongoose.connection;
db.once("open", function(){
	console.log("db connected");
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);