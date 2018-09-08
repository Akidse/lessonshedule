const Router = require("koa-router");
const router = new Router();
const teacherController = require("../controller/teacherController");

router
	.get('/', teacherController.getAllTeachers)
	.post('/', teacherController.createTeacher)
	.put('/:teacherId', teacherController.updateTeacher)
	.del('/:teacherId', teacherController.deleteTeacher);

module.exports = router;