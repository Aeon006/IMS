import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    intern: { type: mongoose.Schema.Types.ObjectId, ref: "Intern", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending"
    },
    dueDate: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
