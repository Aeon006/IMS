import { Router } from "express";
import { createProject, listProjects, updateProject } from "../controllers/projectController.js";

const router = Router();

router.post("/", createProject);
router.get("/", listProjects);
router.patch("/:projectId", updateProject);

export default router;
