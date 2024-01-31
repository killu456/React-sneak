const  Router =  require("express");
const BasketControler = require("../controlers/BasketControler");

const router = Router();

router.post('/',BasketControler.create)
router.get('/',BasketControler.getAll)
router.delete('/:id',BasketControler.delete)

module.exports = router