"use client";

import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Star from "./Star/Star";
import { useState } from "react";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";
import { FaRegCommentAlt } from "react-icons/fa";
import { updateAns } from "@/lib/data";

export default function Answer({ props }) {
  const { ans, cmnts } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = async (formData) => {
    setIsEdit(!isEdit);
    console.log("clicked");

    await updateAns(formData);
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
          <div className="flex flex-col gap-4 bg-gray-100">
            <div className="relative h-[80vh]">
              <Image src={`/qn1.png`} alt="" fill className="object-contain " />
            </div>
            <div className="relative h-[80vh] ">
              <Image src={`/qn1.png`} alt="" fill className="object-contain " />
            </div>
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
        <form className="flex items-center" action={`#`}>
          <button className="hoverAnimate text-lg">
            <AiOutlineDelete />
          </button>
        </form>
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
