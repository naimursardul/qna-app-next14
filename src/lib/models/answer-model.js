import mongoose from "mongoose";

export const answerSchema = new mongoose.Schema(
  {
    ans: {
      type: String,
    },
    imgs: {
      type: Array,
    },
    star: {
      type: Number,
      default: 0,
    },
    userId: {
      type: String,
      required: true,
    },
    qId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Answer =
  mongoose.models?.Answer || mongoose.model("Answer", answerSchema);
