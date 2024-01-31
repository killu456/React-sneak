const  Router =  require("express");
const OrderControler = require("../controlers/OrderControler");

const router = Router();

router.post('/',OrderControler.create)
router.get('/',OrderControler.getAll)
router.delete('/:id',OrderControler.delete)

module.exports = router