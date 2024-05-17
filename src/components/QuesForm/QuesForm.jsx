"use client";

import { createQuestion } from "@/lib/data";
import { useFormState } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { chaps, subs } from "@/lib/utilities";
import UploadImg from "../UploadImg/UploadImg";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function QuesForm() {
  const [imgs, setImgs] = useState(null);

  const [pending, setPending] = useState(false);

  const handleSubmit = async (FormData) => {
    setPending(true);
    const { ques, chap, imgs, sub, userId } = Object.fromEntries(FormData);
    console.log(imgs);
    console.log(ques);

    if (!(ques && chap && sub)) {
      toast.error("Please, fill up the required field");
      setPending(false);
      return;
    }

    const qObj = {
      ques,
      chap,
      sub,
      userId,
      userId: "283r84fuwe",
      class: "HSC",
    };
    if (imgs && imgs[0]) qObj.imgs = imgs;

    console.log(qObj);

    const res = await createQuestion(qObj);
    console.log(res);
    setPending(false);

    res?.err && toast.error(res.err);
    res?.data && redirect(`/questions/${res.data?._id}`);
  };

  return (
    <form
      action={handleSubmit}
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
      {/* Message */}
      {/* {state?.err && (
        <div className="flex gap-1 text-red-800 items-center">
          <RxCrossCircled />
          <small>{state.err}</small>
        </div>
      )} */}

      <button
        type="submit"
        disabled={pending}
        className="btn bg-[--btn] hover:opacity-80 rounded-lg text-[--text]"
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
