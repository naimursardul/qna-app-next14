"use server";

import { Answer } from "../models/answer-model";
import { connectDB } from "../utilities";

// GET ANSWER
export const getAllAnswers = async (params) => {
  const qId = params?.id;
  console.log(qId);
  try {
    await connectDB();

    const res = await Answer.find({ qId }).sort({ star: -1 });
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// DELETE ANSWER
export const deleteAnswer = async (ansId) => {
  console.log(ansId);
  try {
    await connectDB();

    const answer = await Answer.findById(ansId);
    const { qId } = answer?._doc;
    if (!answer) throw new Error("Answer is not found");

    await Answer.findByIdAndDelete(ansId);

    console.log(`/questions/${qId}`);
    revalidatePath(`/questions/${qId}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// UPDATE ANSWER
export const updateAns = async (data) => {
  const { ansId, newAns, ansImgs } = data;
  console.log(ansId, newAns, ansImgs);

  const ansObj = {
    ans: newAns,
  };
  if (ansImgs) ansObj.imgs = ansImgs.split(",");

  try {
    await connectDB();
    const answer = await Answer.findById(ansId);
    if (!answer) throw new Error("Answer not found");
    const newAnswer = await Answer.findByIdAndUpdate(ansId, ansObj, {
      new: true,
    });
    console.log(newAnswer);
    revalidatePath(`/questions/${answer._doc.qId}`);
    return { success: "Question updated successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// UPDATE STAR
export const updateStar = async (data) => {
  const { ansId, star } = data;
  console.log(data);
  try {
    await connectDB();

    if (!star) throw new Error("Nothing to update");

    const ans = await Answer.findById(ansId);
    console.log(ans);

    if (!ans) throw new Error("Answer not found");

    const newAns = await Answer.findByIdAndUpdate(
      ansId,
      {
        star,
      },
      { new: true }
    );

    console.log(newAns);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
