import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema(
  {
    cmnt: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    ansId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment =
  mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
