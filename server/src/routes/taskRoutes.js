import { Router } from "express";
import { createTask, listTasks, updateTaskStatus } from "../controllers/taskController.js";

const router = Router();

router.post("/", createTask);
router.get("/", listTasks);
router.patch("/:taskId/status", updateTaskStatus);

export default router;
