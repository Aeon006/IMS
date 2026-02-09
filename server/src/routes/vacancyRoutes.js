import { Router } from "express";
import { createVacancy, listVacancies, updateVacancyStatus } from "../controllers/vacancyController.js";

const router = Router();

router.post("/", createVacancy);
router.get("/", listVacancies);
router.patch("/:vacancyId/status", updateVacancyStatus);

export default router;
