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
    <div className="flex flex-col ">
      {isEdit ? (
        <>
          <form action={handleEdit} className="flex flex-col gap-5 px-4 mb-4">
            <input type="hidden" name="ansId" value={ans?._id} />
            <input type="file" name="img" />
            <textarea
              name="newAns"
              rows="10"
              defaultValue={ans?.ans}
              className="px-4 py-2 border outline-none rounded"
            ></textarea>
            <div className=" flex gap-2">
              <button
                type="submit"
                className=" btn bg-blue-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </form>
          <form action={() => setIsEdit(!isEdit)} className="px-4">
            <button className="btn bg-gray-100 text-black rounded">
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
          <div className="flex flex-col gap-4 px-5 py-3 ">
            <p>{ans?.ans}</p>
          </div>{" "}
        </div>
      )}

      {/* INTERACTIONS */}
      <div className="mx-5 mt-8 mb-4 flex items-center justify-start gap-5  px-4 py-2 border-t border-b ">
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
        <div className="px-5  mb-8">
          <Comments props={{ ans, cmnts }} />
        </div>
      )}
    </div>
  );
}
