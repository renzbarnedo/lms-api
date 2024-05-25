import { NextFunction, Request, Response } from "express";
import Course, { ICourse } from "../models/Course";

const createCourse = (req: Request, res: Response, next: NextFunction) => {
  const { name, duration, description, technology, launchUrl } =
    req.body as Omit<ICourse, "id">;

  const course = new Course({
    name,
    duration,
    description,
    technology,
    launchUrl,
  });

  return course
    .save()
    .then((course) =>
      res.status(201).json({ course, message: "Created successfully" })
    )
    .catch((error) =>
      res.status(500).json({ createCourse: "createCourse", error })
    );
};

export default { createCourse };
