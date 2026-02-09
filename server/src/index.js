import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import { errorHandler, notFoundHandler } from "./utils/errorHandlers.js";
import applicantRoutes from "./routes/applicantRoutes.js";
import vacancyRoutes from "./routes/vacancyRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import internRoutes from "./routes/internRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Internship Management System API" });
});

app.use("/api/applicants", applicantRoutes);
app.use("/api/vacancies", vacancyRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/interns", internRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/projects", projectRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5000;

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
