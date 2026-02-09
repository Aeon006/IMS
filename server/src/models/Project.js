import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    assignedInterns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Intern" }],
    status: { type: String, enum: ["active", "completed"], default: "active" }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
