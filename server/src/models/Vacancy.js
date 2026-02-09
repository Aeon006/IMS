import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    companyName: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    requirements: [{ type: String, trim: true }],
    location: { type: String, trim: true },
    stipend: { type: String, trim: true },
    status: { type: String, enum: ["open", "closed"], default: "open" }
  },
  { timestamps: true }
);

export default mongoose.model("Vacancy", vacancySchema);
