import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    vacancy: { type: mongoose.Schema.Types.ObjectId, ref: "Vacancy", required: true },
    applicantProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApplicantProfile",
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending"
    },
    notes: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
