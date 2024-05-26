import { Router } from "express";
import courseController from "../controllers/Course";

const router = Router();

router.post("/courses/add", courseController.createCourse);
router.get("/course", courseController.createCourse);
router.get("/courses/info/:technology", courseController.getCourse);
router.get("/courses/getall", courseController.getAll);
router.delete("/courses/delete/:courseName", courseController.deleteCourse);

export default router;

/**
 * 
 * OK
POST /api/v1.0/lms/courses/add/<coursename> Add new course to the system
GET /api/v1.0/lms/courses/info/<technology> Fetches the course Details based on given technology
GET /api/v1.0/lms/courses/getall Fetches all the course Details
DELETE /api/v1.0/lms/courses/delete/<coursename> Deletes a course
 
TODO:
POST /api/v1.0/lms/company/register Register a new company
GET /api/v/1.0/lms/courses/get/<technology>/ <durationFromRange>/<durationToRange> Fetches courses based on the given duration
 */
