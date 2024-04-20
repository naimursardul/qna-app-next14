import mongoose from "mongoose";

export const questionSchema = new mongoose.Schema(
  {
    ques: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    sub: {
      type: String,
      required: true,
    },
    chap: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Question =
  mongoose.models?.Question || mongoose.model("Question", questionSchema);
