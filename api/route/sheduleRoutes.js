const Router = require("koa-router");
const router = new Router();
const sheduleController = require("../controller/sheduleController");
router
	.get('/', sheduleController.getAllShedules)
	.post('/', sheduleController.createShedule)
	.put('/:sheduleId', sheduleController.updateShedule)
	.del('/:sheduleId', sheduleController.deleteShedule);


module.exports = router;