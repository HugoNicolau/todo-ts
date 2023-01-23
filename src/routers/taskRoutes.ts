import { Router } from "express";
import { postTask } from "@/controllers/tasksControllers";

const router = Router();


router.post("/task", postTask);
router.get("/task", getTask);
router.patch("/task", updateTask);
router.delete("/task",deleteTask);

export default router;