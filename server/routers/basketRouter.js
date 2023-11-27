import { Router } from "express";
import { BasketControler } from "../controlers/BasketControler.js";

const router = Router();

router.post('/',BasketControler.create)
router.get('/',BasketControler.getAll)
router.delete('/:id',BasketControler.delete)

module.exports = router