const  Router =  require("express");
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const favoriteRouter = require('./favoriteRouter')
const orderRouter = require('./orderRouter')
const router = Router();



router.use('/user',userRouter)
router.use('/device',deviceRouter)
router.use('/basket',basketRouter)
router.use('/favorites',favoriteRouter)
router.use('/orders',orderRouter)
module.exports = router