import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "user",
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    mode: {
      type: String,
      default: "dark",
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
