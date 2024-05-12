"use client";

import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Star from "./Star/Star";
import { useState } from "react";
import Comments from "@/components/Comments/Comments";
import { FaRegCommentAlt } from "react-icons/fa";
import { deleteAnswer, updateAns } from "@/lib/data";

export default function Answer({ props }) {
  const { ans, cmnts } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);

  // HANDLE EDIT ANSWER
  const handleEdit = async (formData) => {
    setIsEdit(!isEdit);
    console.log("clicked");

    await updateAns(formData);
  };

  //   DELETE ANS
  const handleDeleteAnswer = async () => {
    setIsPopUp(!isPopUp);
    await deleteAnswer(ans?._id);
  };

  return (
    <div className="flex flex-col bg-[--bgSoft] rounded-xl">
      {isEdit ? (
        <>
          <form
            action={handleEdit}
            className="flex flex-col gap-5 px-4 pt-5 mb-4  "
          >
            <input type="hidden" name="ansId" value={ans?._id} />
            <input
              type="file"
              name="img"
              className="text-[--textSoft] bg-[--bgSoftest] "
            />
            <textarea
              name="newAns"
              rows="10"
              defaultValue={ans?.ans}
              className="px-4 py-2 border outline-none border-none rounded bg-[--bgSoftest] text-[--text]"
            ></textarea>
            <div className=" flex gap-2">
              <button
                type="submit"
                className=" btn bg-[--btn] text-[--text] rounded"
              >
                Update
              </button>
            </div>
          </form>
          <form action={() => setIsEdit(!isEdit)} className="px-4">
            <button className="btn bg-[--bgSofter] text-[--text] rounded">
              Cancel
            </button>
          </form>
        </>
      ) : (
        <div>
          {/* IMAGE */}
          <div className="flex flex-col gap-4 h-[100%] overflow-y-auto">
            {ans?.imgs[0] &&
              ans.imgs.map((img, i) => (
                // <div key={i} className="relative min-h-[400px] overflow-auto">
                //   <Image src={img} alt="" fill className="object-cover" />
                // </div>
                <img key={i} src={img} alt="" className="object-contain " />
              ))}
          </div>
          {/* ANSWER TEXT */}
          <p className="px-5 py-3 text-[--text]">{ans?.ans}</p>
        </div>
      )}

      {/* INTERACTIONS */}
      <div className="px-5 py-2 mt-8 flex items-center justify-start gap-5 bg-[--bgSofter]  text-[--textSoft] ">
        {/* STAR */}
        <Star ans={ans} />

        {/* COMMENTS BTN*/}
        <form className="flex items-center" action={() => setIsOpen(!isOpen)}>
          <button className="hoverAnimate">
            <FaRegCommentAlt />
          </button>
        </form>

        {/* EDIT BTN*/}
        <form className="flex items-center" action={() => setIsEdit(!isEdit)}>
          <button className="hoverAnimate  text-xl">
            <CiEdit />
          </button>
        </form>

        {/* DELETE BTN*/}
        <form className="flex items-center" action={() => setIsPopUp(!isPopUp)}>
          <button className="hoverAnimate text-lg">
            <AiOutlineDelete />
          </button>
        </form>
        {isPopUp && (
          <div>
            <div className="fixed top-0 left-0  h-screen w-screen z-20 opacity-50 bg-black "></div>
            <div className="z-30 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-md max-sm:w-[280px] flex flex-col gap-3 bg-[--bgSofter] px-5 py-4  ">
              <h3 className="text-xl text-[--text] font-semibold ">Delete</h3>
              <p className="text-sm text-[--text]">
                Are you sure want to delete this Answer?
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
                  onClick={handleDeleteAnswer}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* COMMENTS */}
      {isOpen && (
        <div className="px-5 bg-[--bgSofter] pb-8">
          <Comments props={{ ans, cmnts }} />
        </div>
      )}
    </div>
  );
}
