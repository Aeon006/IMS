import Application from "../models/Application.js";
import ApplicantProfile from "../models/ApplicantProfile.js";
import Vacancy from "../models/Vacancy.js";
import Intern from "../models/Intern.js";

export const createApplication = async (req, res, next) => {
  try {
    const { vacancyId, applicantProfileId, notes } = req.body;

    if (!vacancyId || !applicantProfileId) {
      return res.status(400).json({ message: "Vacancy and applicant profile are required." });
    }

    const vacancy = await Vacancy.findById(vacancyId);
    if (!vacancy) {
      return res.status(404).json({ message: "Vacancy not found." });
    }

    const profile = await ApplicantProfile.findById(applicantProfileId);
    if (!profile) {
      return res.status(404).json({ message: "Applicant profile not found." });
    }

    const existing = await Application.findOne({ vacancy: vacancyId, applicantProfile: applicantProfileId });
    if (existing) {
      return res.status(409).json({ message: "Application already submitted." });
    }

    const application = await Application.create({
      vacancy: vacancyId,
      applicantProfile: applicantProfileId,
      notes
    });

    res.status(201).json(application);
  } catch (error) {
    next(error);
  }
};

export const listApplications = async (req, res, next) => {
  try {
    const applications = await Application.find()
      .populate("vacancy", "title companyName status")
      .populate({ path: "applicantProfile", populate: { path: "user", select: "fullName email" } })
      .sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    next(error);
  }
};

export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { applicationId } = req.params;
    const { status, notes, mentor, startDate, endDate } = req.body;

    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({ message: "Application not found." });
    }

    application.status = status || application.status;
    if (notes) {
      application.notes = notes;
    }

    await application.save();

    if (status === "accepted") {
      const existingIntern = await Intern.findOne({ applicantProfile: application.applicantProfile });
      if (!existingIntern) {
        await Intern.create({
          applicantProfile: application.applicantProfile,
          mentor,
          startDate,
          endDate
        });
      }
    }

    res.json(application);
  } catch (error) {
    next(error);
  }
};
