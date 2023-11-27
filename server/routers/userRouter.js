import { Router } from "express";
import { UserControler } from "../controlers/UserControler.js";

const router = Router();

router.get('/auth',UserControler.check);
router.post('/registration',UserControler.registration);
router.post('/login',UserControler.login);

module.exports = router