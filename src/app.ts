import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import http from "http";

import courseRoutes from "./routes/course";
import { config } from "./config/config";

mongoose
  .connect(config.mongo.url, {
    retryWrites: true,
    w: "majority",
    appName: process.env.MONGO_APP_NAME,
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => {
    console.log(`MongoDB has been connected.`);
    startServer();
  })
  .catch((error) => {
    console.log("An error has ocurred.");
    console.log(error);
    console.log("An error has ocurred.");
  });

const startServer = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  const ALLOWED_ORIGINS = "*";

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", ALLOWED_ORIGINS);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  app.use(courseRoutes);

  http.createServer(app).listen(config.server.port, () => {
    console.log(`Server running on PORT: ${config.server.port}`);
  });
};
