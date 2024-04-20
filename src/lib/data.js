"use server";

import { revalidatePath } from "next/cache.js";
import { Answer } from "./models/answer-model.js";
import { Question } from "./models/question-model.js";
import { chaps, connectDB, subs } from "./utilities.js";
import { Comment } from "./models/comment-model.js";

// CREATE QUESTION
export const createQuestion = async (prev, formData) => {
  const { ques, chap, sub, userId } = Object.fromEntries(formData);

  try {
    await connectDB();

    if (!(ques, chap, sub)) {
      return { err: "Please fill up the required fields" };
    }

    const newQ = await new Question({
      ques,
      chap,
      sub,
      userId,
    });

    await newQ.save();
    return { success: "Question submitted successfully!" };
  } catch (error) {
    console.log(error);
    return { err: "Error in Server-side. Try again!" };
  }
};

// GET QUESTIONS
export const getAllQuestions = async ({ chap, sub, search }) => {
  search ? (search = search) : (search = "");
  sub ? (sub = [sub]) : (sub = [...subs]);
  chap ? (chap = [chap]) : (chap = [...chaps]);
  // console.log(chap, sub, search);
  try {
    await connectDB();

    const allQuestions = await Question.find({
      ques: { $regex: search, $options: "i" },
    })
      .where("sub")
      .in(sub)
      .where("chap")
      .equals(chap)
      .sort({ createdAt: -1 });

    return allQuestions;
  } catch (error) {
    console.log(error);
  }
};

// GET SINGLE QUESTION
export const getSingleQuestion = async ({ id }) => {
  try {
    await connectDB();

    const res = await Question.findById(id);
    // console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// SUBMIT ANSWER
export const submitAnswer = async (prev, formData) => {
  const { qid, userId, ans } = Object.fromEntries(formData);
  console.log(qid, userId, ans);

  try {
    await connectDB();

    if (!ans) {
      return { err: "Please fill up the required fields" };
    }

    const res = await new Answer({
      qid,
      userId,
      ans,
    });

    console.log(res);
    await res.save();

    revalidatePath(`/questions/${qid}`);
    return { success: "Question submitted successfully!" };
  } catch (error) {
    console.log(error);
    return { err: "Error in Server-side. Try again!" };
  }
};

// GET ANSWER
export const getAllAnswers = async (params) => {
  const qId = params?.id;
  try {
    await connectDB();

    const res = await Answer.find({ qId }).sort({ star: -1 });
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// UPDATE STAR & UPDATE ANSWER
export const updateAns = async (data) => {
  const { ansId, star, img, qId } = data;
  console.log(data);
  try {
    await connectDB();

    if (!(star || img || ans)) return { error: "Nothing to update" };

    const ans = await Answer.findById(ansId);
    console.log(ans);

    if (!ans) return { error: "Answer not found" };

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
  }
};

// ADD COMMENT
export const addComment = async (formData) => {
  const { cmnt, userId, ansId, qId } = Object.fromEntries(formData);
  if (!cmnt) return false;
  try {
    await connectDB();

    const newCmnt = await new Comment({ cmnt, userId, ansId });

    await newCmnt.save();
    // console.log(newCmnt);

    revalidatePath(`/questions/${qId}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// GET ALL COMMENTS
export const getAllComments = async (ansId) => {
  console.log(ansId);
  try {
    await connectDB();

    const cmnts = await Comment.find({ ansId }).sort({ createdAt: -1 });

    if (!cmnts) return false;

    console.log(cmnts);
    return cmnts;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// UPDATE COMMENT
export const updateComment = async ([cmnt, newCmnt]) => {
  const { _id, ansId } = cmnt;
  console.log(_id);
  if (!newCmnt) return false;
  try {
    await connectDB();

    const ans = await Answer.findById(ansId);
    console.log(ans);
    console.log(ans?._doc.qId);
    if (!ans) return false;

    const newComment = await Comment.findByIdAndUpdate(
      _id,
      {
        cmnt: newCmnt,
      },
      { new: true }
    );

    revalidatePath(`/questions/${ans?._doc.qId}`);
    console.log(newComment);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// UPDATE COMMENT
export const deleteComment = async (cmnt) => {
  const { _id, ansId } = cmnt;
  try {
    await connectDB();

    const ans = await Answer.findById(ansId);
    console.log(ans);
    console.log(ans?._doc.qId);
    if (!ans) return false;

    const comment = await Comment.findById(_id);

    // console.log(comment);
    if (!comment) return false;

    await Comment.findByIdAndDelete(_id);

    revalidatePath(`/questions/${ans?._doc.qId}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
