import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: {
      type: String,
      enum: ["applicant", "company", "admin"],
      default: "applicant"
    },
    companyName: { type: String, trim: true },
    phone: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
