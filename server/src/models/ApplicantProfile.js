import mongoose from "mongoose";

const applicantProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    education: { type: String, trim: true },
    skills: [{ type: String, trim: true }],
    resumeUrl: { type: String, trim: true },
    portfolioUrl: { type: String, trim: true },
    availability: { type: String, trim: true },
    bio: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("ApplicantProfile", applicantProfileSchema);
