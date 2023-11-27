import { Router } from "express";
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const router = Router();



router.use('/user',userRouter)
router.use('/device',deviceRouter)
router.use('/basket',basketRouter)

module.exports = router