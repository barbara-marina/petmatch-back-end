
import { Router } from "express";
import authRouter from "./authRouter.js";
import ongRouter from "./ongRouter.js";
import adopterRouter from "./adopterRouter.js";
import chatRouter from "./chatRouter.js";

const router = Router();

router.use(authRouter);
router.use(ongRouter);
router.use(adopterRouter);
router.use(chatRouter);

export default router;