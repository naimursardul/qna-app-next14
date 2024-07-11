"use client";

import { deleteComment, updateComment } from "@/lib/server_actions/action";
import Image from "next/image";
import { useState } from "react";

export default function SingleComment({ cmnt }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newCmnt, setNewCmnt] = useState(cmnt?.cmnt);
  const [isUpdate, setIsUpdate] = useState(false);

  const [isPopUp, setIsPopUp] = useState(false);

  const handleUpdateComment = async () => {
    setIsEdit(!isEdit);
    // console.log(newCmnt);
    const res = await updateComment([cmnt, newCmnt]);
    console.log(res);
    res && setIsUpdate(true);
  };

  //   DELETE COMMENT
  const handleDeleteComment = async () => {
    setIsPopUp(!isPopUp);
    await deleteComment(cmnt);
  };

  // COMMENT TIMESTAMP
  const cmntTimeAgo = () => {
    let timeAgo = Math.floor((new Date() - cmnt?.createdAt) / 1000);

    // 1 min to 60 mins
    timeAgo = Math.floor((new Date() - cmnt?.createdAt) / (1000 * 60));
    if (timeAgo >= 1 && timeAgo <= 60) {
      return { time: timeAgo === 1 ? "min" : "mins", timeAgo };
    }
    // 1 hr to 24 hrs
    timeAgo = Math.floor((new Date() - cmnt?.createdAt) / (1000 * 60 * 60));
    if (timeAgo >= 1 && timeAgo <= 24) {
      return { time: timeAgo === 1 ? "hr" : "hrs", timeAgo };
    }
    // 1 day to 30 days
    timeAgo = Math.floor(
      (new Date() - cmnt?.createdAt) / (1000 * 60 * 60 * 24)
    );
    if (timeAgo >= 1 && timeAgo <= 30) {
      return { time: timeAgo === 1 ? "day" : "days", timeAgo };
    }
    // 1 month to 12 months
    timeAgo = Math.floor(
      (new Date() - cmnt?.createdAt) / (1000 * 60 * 60 * 24 * 30)
    );
    if (timeAgo >= 1 && timeAgo <= 12) {
      return { time: timeAgo === 1 ? "month" : "months", timeAgo };
    }
    // 1 year ++
    timeAgo = Math.floor(
      (new Date() - cmnt?.createdAt) / (1000 * 60 * 60 * 24 * 30 * 12)
    );
    if (timeAgo >= 1) {
      return { time: timeAgo === 1 ? "yr" : "yrs", timeAgo };
    }

    // 1sec to 60 sec
    return { time: "Just now", timeAgo: "" };
  };

  return (
    <div className="flex gap-3 ">
      {/* PROFLE IMG */}
      <div className="relative w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px]">
        <Image src={`/aboutme.jpg`} alt="" fill className="rounded-full " />
      </div>

      <div className="flex flex-col items-start gap-1">
        {/* COMMENT TEXT */}
        <div className="flex flex-col bg-[--bgSoftest] text-[--text] rounded-2xl px-4 py-3 text-sm">
          <p className="text-[12px] text-[--text] font-semibold ">
            Naimur Rahman
          </p>
          {isEdit ? (
            <textarea
              type="text"
              name="newCmnt"
              value={newCmnt}
              onChange={(e) => setNewCmnt(e.target.value)}
              className="w-full bg-[--bgSoft] outline-none rounded-md px-2 py-1"
            />
          ) : (
            <p className="">{isUpdate ? newCmnt : cmnt?.cmnt}</p>
          )}
        </div>

        {/* COMMENT ACTION */}
        <div className="flex gap-4 font-[500] text-[--textSoft] ml-3">
          <p className="font-[200]">
            {cmntTimeAgo()?.timeAgo + " " + cmntTimeAgo()?.time}
          </p>
          <div>
            {isEdit ? (
              <div className="flex gap-4">
                <button onClick={handleUpdateComment}>Update</button>
                <button onClick={() => setIsEdit(!isEdit)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            )}
          </div>
          {!isEdit && (
            <div>
              <button onClick={() => setIsPopUp(!isPopUp)}>Delete</button>
            </div>
          )}
        </div>
      </div>
      {isPopUp && (
        <div>
          <div className="fixed top-0 left-0  h-screen w-screen z-20 opacity-50 bg-black "></div>
          <div className="z-30 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-md max-sm:w-[280px] flex flex-col gap-3 bg-[--bgSofter] px-5 py-4  ">
            <h3 className="text-xl text-[--text] font-semibold ">Delete</h3>
            <p className="text-sm text-[--text]">
              Are you sure want to delete this comment?
            </p>
            <div className="flex gap-3">
              <button
                className="btn font-semibold rounded bg-[--bgSoftest] text-[--text]"
                onClick={() => setIsPopUp(!isPopUp)}
              >
                No
              </button>
              <button
                className="btn font-semibold rounded bg-[--btn] text-[--text]"
                onClick={handleDeleteComment}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
