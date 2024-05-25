import mongoose, { Document, Schema } from "mongoose";

export interface ICourse {
  id: string;
  name: string;
  duration: string;
  description: string;
  technology: string;
  launchUrl: string;
}

export interface ICourseModel extends ICourse {}

const CourseSchema: Schema = new Schema(
  {
    id: { type: String, require: true },
    name: { type: String, require: true },
    duration: { type: String, require: true },
    description: { type: String, require: true },
    technology: { type: String, require: true },
    launchUrl: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ICourseModel>("Course", CourseSchema);
