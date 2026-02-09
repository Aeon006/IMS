import { Router } from "express";
import { listInterns, updateIntern } from "../controllers/internController.js";

const router = Router();

router.get("/", listInterns);
router.patch("/:internId", updateIntern);

export default router;
