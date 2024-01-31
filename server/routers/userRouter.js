const  Router =  require("express");
const UserControler =  require("../controlers/UserControler");
const authMiddleware = require("../Middleware/authMiddleware")

const router = Router();

router.get('/auth',authMiddleware,UserControler.check);
router.post('/registration',UserControler.registration);
router.post('/login',UserControler.login);

module.exports = router