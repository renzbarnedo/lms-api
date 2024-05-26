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

const getCourse = (req: Request, res: Response, next: NextFunction) => {
  const technology = req.params.technology;

  return Course.find({ technology })
    .then((course) =>
      course
        ? res.status(200).json({ course })
        : res.status(404).json({ message: "Not Found" })
    )
    .catch((error) =>
      res.status(500).json({ createCourse: "createCourse", error })
    );
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
  return Course.find()
    .then((courses) => res.status(200).json({ courses }))
    .catch((error) =>
      res.status(500).json({ createCourse: "createCourse", error })
    );
};

const deleteCourse = (req: Request, res: Response, next: NextFunction) => {
  const { courseName } = req.params;

  return Course.deleteOne({ name: courseName })
    .then((result) =>
      result.deletedCount
        ? res
            .status(200)
            .json({ message: `Deleted ${courseName} successfully.` })
        : res.status(404).json({ message: "Not Found" })
    )
    .catch((error) =>
      res.status(500).json({ createCourse: "createCourse", error })
    );
};

export default { createCourse, getCourse, getAll, deleteCourse };
