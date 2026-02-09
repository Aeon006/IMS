import Vacancy from "../models/Vacancy.js";
import User from "../models/User.js";

export const createVacancy = async (req, res, next) => {
  try {
    const { companyEmail, companyName, title, description, requirements, location, stipend } = req.body;

    if (!companyEmail || !companyName || !title || !description) {
      return res.status(400).json({ message: "Company email, name, title, and description are required." });
    }

    let companyUser = await User.findOne({ email: companyEmail });
    if (!companyUser) {
      companyUser = await User.create({
        fullName: companyName,
        email: companyEmail,
        role: "company",
        companyName
      });
    }

    const vacancy = await Vacancy.create({
      createdBy: companyUser._id,
      companyName,
      title,
      description,
      requirements,
      location,
      stipend
    });

    res.status(201).json(vacancy);
  } catch (error) {
    next(error);
  }
};

export const listVacancies = async (req, res, next) => {
  try {
    const vacancies = await Vacancy.find().sort({ createdAt: -1 });
    res.json(vacancies);
  } catch (error) {
    next(error);
  }
};

export const updateVacancyStatus = async (req, res, next) => {
  try {
    const { vacancyId } = req.params;
    const { status } = req.body;

    const vacancy = await Vacancy.findByIdAndUpdate(
      vacancyId,
      { status },
      { new: true }
    );

    if (!vacancy) {
      return res.status(404).json({ message: "Vacancy not found." });
    }

    res.json(vacancy);
  } catch (error) {
    next(error);
  }
};
