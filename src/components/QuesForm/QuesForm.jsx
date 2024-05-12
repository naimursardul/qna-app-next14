"use client";

import { createQuestion } from "@/lib/data";
import { useFormState } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { chaps, subs } from "@/lib/utilities";
import UploadImg from "../UploadImg/UploadImg";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function QuesForm() {
  const [state, formAction] = useFormState(createQuestion, undefined);
  const [imgs, setImgs] = useState(null);
  console.log(imgs);
  const imgStr = imgs?.join(",");

  if (state?.success && state?.data) {
    redirect(`/questions/${state.data?._id}`);
  }

  return (
    <form
      action={formAction}
      // className="flex flex-col gap-5  p-8 max-sm:px-5 rounded-lg border-none outline-none shadowColor"
      className="flex flex-col gap-5 bg-[--bgSoft] p-8 max-sm:px-5 rounded-lg border-none outline-none "
    >
      <h1 className="text-3xl text-[--btnSoft] mb-5">Ask your question</h1>
      <div className="flex gap-3 justify-start">
        {/*
         *
         *
         */}
        {/* SUB */}
        <label htmlFor="sub" className="font-semibold text-[--textSoft]">
          Subject:
        </label>
        <select
          name="sub"
          className="bg-[--bgSofter] text-[--text] px-2 py-1 rounded-md outline-none"
        >
          <option value={false}>Select</option>
          {subs?.map((sub, index) => (
            <option key={index} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>
      {/*
       *
       *
       */}
      {/* CHAP */}
      <div className="flex gap-3 justify-start">
        <label htmlFor="chap" className="font-semibold text-[--textSoft]">
          Chapter:
        </label>
        <select
          name="chap"
          className="bg-[--bgSofter] text-[--text] px-2 py-1 rounded-md outline-none"
        >
          <option value={false}>Select</option>
          {chaps?.map((chap, index) => (
            <option key={index} value={chap}>
              {chap}
            </option>
          ))}
        </select>
      </div>
      {/*
       *
       *
       */}
      {/* IMG */}
      <input type="hidden" name="imgs" value={imgStr} />
      <UploadImg props={{ setImgs, imgs, isMultiple: false }} />
      {/*
       *
       *
       */}
      {/* TEXT */}
      <div className="flex flex-col gap-2 justify-start">
        <label htmlFor="sub" className="flex flex-col">
          <span className="font-semibold text-[--textSoft]">
            Your question:
          </span>
          <small className="text-[--text]">
            {"(Write at least the topic of your question)*"}
          </small>
        </label>
        <textarea
          type="text"
          name="ques"
          placeholder="Type here..."
          rows={10}
          className="border bg-[--bgSofter] rounded-lg border-none outline-none py-3 px-4 text-[--text]"
        />
      </div>
      {/*
       *
       *
       */}
      {/* User ID */}
      <input type="hidden" name="userId" value={"1324453408"} />
      {/*
       *
       *
       */}
      {/* Message */}
      {state?.err && (
        <div className="flex gap-1 text-red-800 items-center">
          <RxCrossCircled />
          <small>{state.err}</small>
        </div>
      )}

      <button className="btn bg-[--btn] hover:bg-[--btnSoft] rounded-lg text-[--text]">
        Submit
      </button>
    </form>
  );
}
