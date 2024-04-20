"use client";

import { createQuestion } from "@/lib/data";
import { useFormState } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { chaps, subs } from "@/lib/utilities";

export default function QuesForm() {
  const [state, formAction] = useFormState(createQuestion, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5 ">
      <div className="flex gap-3 justify-start">
        {/* SUB */}
        <label htmlFor="sub" className="font-semibold">
          Subject:
        </label>
        <select name="sub">
          <option value={false}>Select</option>
          {subs?.map((sub, index) => (
            <option key={index} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>
      {/* CHAP */}
      <div className="flex gap-3 justify-start">
        <label htmlFor="chap" className="font-semibold">
          Chapter:
        </label>
        <select name="chap">
          <option value={false}>Select</option>
          {chaps?.map((chap, index) => (
            <option key={index} value={chap}>
              {chap}
            </option>
          ))}
        </select>
      </div>
      {/* IMG */}
      <div className="flex gap-3 justify-start items-center">
        <label htmlFor="sub" className="font-semibold">
          Image:
        </label>
        <input type="file" name="img" className="text-sm" />
      </div>
      {/* TEXT */}
      <div className="flex flex-col gap-2 justify-start">
        <label htmlFor="sub" className="flex flex-col">
          <span className="font-semibold">Your question:</span>
          <small>{"(Write at least the topic of your question)*"}</small>
        </label>
        <textarea
          type="text"
          name="ques"
          placeholder="Question"
          rows={10}
          className="border rounded-lg outline-none py-3 px-4"
        />
      </div>
      {/* User ID */}
      <input type="hidden" name="userId" value={"1324453408"} />
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
      <button className="btn bg-blue-600 rounded-lg text-white">Submit</button>
    </form>
  );
}
