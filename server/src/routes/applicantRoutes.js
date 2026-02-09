import { Router } from "express";
import { createApplicantProfile, listApplicantProfiles } from "../controllers/applicantController.js";

const router = Router();

router.post("/profiles", createApplicantProfile);
router.get("/profiles", listApplicantProfiles);

export default router;
