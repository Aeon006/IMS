import Task from "../models/Task.js";
import Intern from "../models/Intern.js";

export const createTask = async (req, res, next) => {
  try {
    const { internId, title, description, dueDate } = req.body;

    if (!internId || !title) {
      return res.status(400).json({ message: "Intern and title are required." });
    }

    const intern = await Intern.findById(internId);
    if (!intern) {
      return res.status(404).json({ message: "Intern not found." });
    }

    const task = await Task.create({
      intern: internId,
      title,
      description,
      dueDate
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const listTasks = async (req, res, next) => {
  try {
    const { internId } = req.query;
    const filter = internId ? { intern: internId } : {};
    const tasks = await Task.find(filter).populate("intern").sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const updateTaskStatus = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.json(task);
  } catch (error) {
    next(error);
  }
};
