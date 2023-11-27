import { Router } from "express";
import { DeviceControler } from "../controlers/DeviceControler.js";

const router = Router();

router.get('/',DeviceControler.getAll);
router.get('/:id',DeviceControler.getOne);
router.del('/:id',DeviceControler.delete);
router.post('/',DeviceControler.create);

module.exports = router