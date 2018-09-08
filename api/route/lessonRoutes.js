const Router = require("koa-router");
const router = new Router();
const lessonController = require("../controller/lessonController");
router
	.get('/', lessonController.getAllLessons)
	.post('/', lessonController.createLesson)
	.put('/:lessonId', lessonController.updateLesson)
	.del('/:lessonId', lessonController.deleteLesson);

module.exports = router;