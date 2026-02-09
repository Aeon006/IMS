import { Router } from "express";
import {
  createApplication,
  listApplications,
  updateApplicationStatus
} from "../controllers/applicationController.js";

const router = Router();

router.post("/", createApplication);
router.get("/", listApplications);
router.patch("/:applicationId/status", updateApplicationStatus);

export default router;
