const Router = require("koa-router");
const router = new Router;

const teacherRoutes = require("./teacherRoutes");
const lessonRoutes = require("./lessonRoutes");
const sheduleRoutes = require("./sheduleRoutes");

router.use('/teachers', teacherRoutes.routes());
router.use('/lessons', lessonRoutes.routes());
router.use('/shedule', sheduleRoutes.routes());

module.exports = router;