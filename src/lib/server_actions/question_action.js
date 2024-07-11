"use server";

import { Question } from "../models/question-model";
import { connectDB } from "../utilities";

// GET SINGLE QUESTION
export const getSingleQuestion = async ({ id }) => {
  try {
    await connectDB();

    const res = await Question.findById(id);
    console.log(res?._doc);

    return res?._doc;
  } catch (error) {
    throw error;
  }
};
