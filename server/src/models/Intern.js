import mongoose from "mongoose";

const internSchema = new mongoose.Schema(
  {
    applicantProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApplicantProfile",
      required: true
    },
    mentor: { type: String, trim: true },
    startDate: { type: Date },
    endDate: { type: Date },
    status: { type: String, enum: ["active", "completed"], default: "active" }
  },
  { timestamps: true }
);

export default mongoose.model("Intern", internSchema);
