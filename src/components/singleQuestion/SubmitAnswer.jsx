"use client";

import { useFormState } from "react-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import UploadImg from "../UploadImg/UploadImg";
import { useState } from "react";
import { createAnswer } from "@/lib/server_actions/action";
import { toast } from "react-hot-toast";
import SubmitBtn from "../SubmitBtn";

export default function SubmitSolve({ params }) {
  const [imgs, setImgs] = useState([]);
  console.log(imgs);
  const imgStr = imgs?.join(",");

  const [state, formAction] = useFormState(createAnswer, undefined);

  if (state?.err) {
    toast.error(state.err);
    state.err = null;
  }
  if (state?.success) {
    toast.success(state?.success);
    state.success = null;
  }

  const { id: qId } = params;
  const userId = "85y23458484237";
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-semibold text-3xl text-[--btnSoft]">
        Submit Answer:
      </h2>
      <form action={formAction} className="flex flex-col gap-4">
        {/* IMAGE */}
        <input type="hidden" name="ansImgs" value={imgStr} />
        <UploadImg props={{ setImgs, imgs, isMultiple: true }} />
        {/* ANSWER-TEXT */}
        <textarea
          placeholder="Type answer..."
          name="ans"
          rows={10}
          className="w-full border-none outline-none bg-[--bgSoftest]  rounded-md p-4  text-[--text] "
        />

        {/* RESPONDENT */}
        <input type="hidden" name="userId" value={userId} />

        {/* QUESTION ID */}
        <input type="hidden" name="qId" value={qId} />

        {/* BUTTON */}
        <SubmitBtn />
      </form>
    </div>
  );
}
