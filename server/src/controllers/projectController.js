import Project from "../models/Project.js";
import Intern from "../models/Intern.js";

export const createProject = async (req, res, next) => {
  try {
    const { title, description, assignedInterns } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Project title is required." });
    }

    if (assignedInterns?.length) {
      const internCount = await Intern.countDocuments({ _id: { $in: assignedInterns } });
      if (internCount !== assignedInterns.length) {
        return res.status(400).json({ message: "One or more interns not found." });
      }
    }

    const project = await Project.create({
      title,
      description,
      assignedInterns
    });

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

export const listProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().populate({
      path: "assignedInterns",
      populate: { path: "applicantProfile", populate: { path: "user", select: "fullName email" } }
    });
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { title, description, assignedInterns, status } = req.body;

    const project = await Project.findByIdAndUpdate(
      projectId,
      { title, description, assignedInterns, status },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }

    res.json(project);
  } catch (error) {
    next(error);
  }
};
