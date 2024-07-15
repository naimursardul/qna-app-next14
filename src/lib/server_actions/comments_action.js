"use server";

import { Comment } from "../models/comment-model";
import { connectDB } from "../utilities";

// GET ALL COMMENTS
export const getAllComments = async (ansId) => {
  console.log(ansId);
  try {
    await connectDB();

    const cmnts = await Comment.find({ ansId }).sort({ createdAt: -1 });

    if (!cmnts) throw new Error("No comments found");

    console.log(cmnts);
    return cmnts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
