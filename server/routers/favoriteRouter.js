const  Router =  require("express");
const FavoriteControler = require("../controlers/FavoriteControler");

const router = Router();

router.post('/',FavoriteControler.create)
router.get('/',FavoriteControler.getAll)
router.delete('/:id',FavoriteControler.delete)

module.exports = router