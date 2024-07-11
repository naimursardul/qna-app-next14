"use client";

import { createQuestion } from "@/lib/server_actions/action";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { chaps, subs } from "@/lib/utilities";
import UploadImg from "../UploadImg/UploadImg";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import SubmitBtn from "../SubmitBtn";

export default function QuesForm() {
  const { pending } = useFormStatus();
  const res = useFormStatus();
  const [imgs, setImgs] = useState(null);
  const imgStr = imgs && imgs.join(",");
  const [state, formAction] = useFormState(createQuestion, undefined);

  state?.err && [toast.error(state.err), (state.err = null)];
  state?.data && redirect(`/questions/${state.data?._id}`);

  console.log(res);
  console.log(pending);
  return (
    <form
      action={formAction}
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
          <option value="">Select</option>
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
          <option value="">Select</option>
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
      <div className="flex flex-col gap-2 justify-start">
        <label htmlFor="imgs" className="font-semibold text-[--textSoft]">
          Image:
        </label>
        <input type="hidden" name="imgs" value={imgStr} />
        <UploadImg props={{ setImgs, imgs, isMultiple: false }} />
      </div>
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

      <input type="hidden" name="userId" value={"krjfi988"} />
      <input type="hidden" name="studentClass" value={"HSC"} />
      {/*
       *
       *
       */}

      <SubmitBtn />
    </form>
  );
}
