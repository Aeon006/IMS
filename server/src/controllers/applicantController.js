import User from "../models/User.js";
import ApplicantProfile from "../models/ApplicantProfile.js";

export const createApplicantProfile = async (req, res, next) => {
  try {
    const { fullName, email, phone, education, skills, resumeUrl, portfolioUrl, availability, bio } =
      req.body;

    if (!fullName || !email) {
      return res.status(400).json({ message: "Full name and email are required." });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ fullName, email, phone, role: "applicant" });
    }

    const existingProfile = await ApplicantProfile.findOne({ user: user._id });
    if (existingProfile) {
      return res.status(409).json({ message: "Applicant profile already exists." });
    }

    const profile = await ApplicantProfile.create({
      user: user._id,
      education,
      skills,
      resumeUrl,
      portfolioUrl,
      availability,
      bio
    });

    res.status(201).json(profile);
  } catch (error) {
    next(error);
  }
};

export const listApplicantProfiles = async (req, res, next) => {
  try {
    const profiles = await ApplicantProfile.find().populate("user", "fullName email phone");
    res.json(profiles);
  } catch (error) {
    next(error);
  }
};
