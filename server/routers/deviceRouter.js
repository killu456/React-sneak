const  Router =  require("express");
const DeviceControler =  require("../controlers/DeviceControler");
const checkRole = require("../Middleware/checkRoleMiddleware")
const router = Router();

router.get('/',DeviceControler.getAll);
router.get('/:id',DeviceControler.getOne);
router.del('/:id',DeviceControler.delete);
router.post('/',DeviceControler.create);
router.put('/',DeviceControler.update);

module.exports = router