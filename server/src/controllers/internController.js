import Intern from "../models/Intern.js";

export const listInterns = async (req, res, next) => {
  try {
    const interns = await Intern.find()
      .populate({ path: "applicantProfile", populate: { path: "user", select: "fullName email" } })
      .sort({ createdAt: -1 });

    res.json(interns);
  } catch (error) {
    next(error);
  }
};

export const updateIntern = async (req, res, next) => {
  try {
    const { internId } = req.params;
    const { mentor, startDate, endDate, status } = req.body;

    const intern = await Intern.findByIdAndUpdate(
      internId,
      { mentor, startDate, endDate, status },
      { new: true }
    );

    if (!intern) {
      return res.status(404).json({ message: "Intern not found." });
    }

    res.json(intern);
  } catch (error) {
    next(error);
  }
};
