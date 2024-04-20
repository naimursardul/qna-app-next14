"use client";

import { deleteComment, updateComment } from "@/lib/data";
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

  if (isPopUp) {
    document.body.classList.add("blurBg");
  } else {
    document.body.classList.remove("blurBg");
  }

  return (
    <div className="flex gap-3 ">
      {/* PROFLE IMG */}
      <div className="relative w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px]">
        <Image src={`/aboutme.jpg`} alt="" fill className="rounded-full " />
      </div>

      <div className="flex flex-col items-start ">
        {/* COMMENT TEXT */}
        <div className="flex flex-col bg-gray-100 rounded-2xl px-4 py-3 text-sm">
          <div className="text-[12px]  font-semibold">Naimur Rahman</div>
          {isEdit ? (
            <textarea
              type="text"
              name="newCmnt"
              value={newCmnt}
              onChange={(e) => setNewCmnt(e.target.value)}
              className="w-full px-2 py-1"
            />
          ) : (
            <p className="">{isUpdate ? newCmnt : cmnt?.cmnt}</p>
          )}
        </div>

        {/* COMMENT ACTION */}
        <div className="flex gap-4 text-[13px] ml-3">
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
          <div className="z-30 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-md max-sm:w-[280px] flex flex-col gap-3 bg-white px-5 py-4  ">
            <h3 className="text-xl font-semibold ">Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure want to delete this comment?
            </p>
            <div className="flex gap-3">
              <button
                className="btn rounded bg-blue-600 text-white"
                onClick={handleDeleteComment}
              >
                Yes
              </button>
              <button
                className="btn rounded bg-gray-200 text-black"
                onClick={() => setIsPopUp(!isPopUp)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
