"use client";

import { IoIosSend } from "react-icons/io";
import { useFormState } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { submitAnswer } from "@/lib/data";

export default function SubmitSolve({ params }) {
  const [state, formAction] = useFormState(submitAnswer, undefined);

  const { id: qid } = params;
  // console.log(qid);
  const userId = "85y23458484237";
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-semibold text-3xl text-[--btnSoft]">
        Submit Answer:
      </h2>
      <form action={formAction} className="flex flex-col gap-4">
        {/* IMAGE */}
        <input type="file" className="bg-[--bgSoftest] text-[--textSoft]" />

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
        <input type="hidden" name="qid" value={qid} />

        {/* Message */}
        {state?.err && (
          <div className="flex gap-1 text-red-800 items-center">
            <RxCrossCircled />
            <small>{state.err}</small>
          </div>
        )}
        {state?.success && (
          <div className="flex gap-1 text-green-900 items-center">
            <IoCheckmarkDoneCircle />
            <small>{state.success}</small>
          </div>
        )}

        {/* BUTTON */}
        <button className="btn rounded-md bg-[--btn] hover:bg-[--btnSoft] text-[--text] flex items-center">
          <span>Submit</span>
          <IoIosSend />
        </button>
      </form>
    </div>
  );
}
