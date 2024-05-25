import { Router } from "express";
import courseController from "../controllers/Course";

const router = Router();

router.post("/course", courseController.createCourse);

export default router;
