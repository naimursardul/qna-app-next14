"use client";

import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Star from "./Star/Star";
import { useState } from "react";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";
import { FaRegCommentAlt } from "react-icons/fa";
import BtnOnClick from "@/components/BtnOnClick/BtnOnClick";

export default function Answer({ props }) {
  const { ans, cmnts } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
    console.log("clicked");
  };
  return (
    <div className="flex flex-col ">
      {isEdit ? (
        <>
          <form action={handleEdit} className="flex flex-col gap-5 px-4 mb-4">
            <input type="hidden" name="ansId" value={ans?._id} />
            <input type="file" name="imgFile" />
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
              {/* <BtnOnClick
                props={{ name: "Cancel", fn: setIsEdit, val: isEdit }}
              /> */}
            </div>
          </form>
          <form action={() => setIsEdit(!isEdit)} className="px-4">
            <button
              className="btn bg-gray-100 text-black rounded"
              // onClick={() => setIsEdit(!isEdit)}
            >
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
      <div className="ml-5 mt-8 mb-4 flex items-center justify-start gap-3 ">
        {/* STAR */}
        <Star ans={ans} />

        {/* COMMENTS BTN*/}
        <form
          action={() => setIsOpen(!isOpen)}
          className=" font-bold cursor-pointer bg-gray-100 rounded-lg h-[40px] px-4 flex items-center"
        >
          <button className="hoverAnimate">
            <FaRegCommentAlt />
          </button>
        </form>

        {/* EDIT BTN*/}
        <form
          action={() => setIsEdit(!isEdit)}
          className=" font-bold cursor-pointer bg-gray-100 rounded-lg h-[40px] px-4 flex items-center"
        >
          <button className="hoverAnimate  text-xl">
            <CiEdit />
          </button>
        </form>

        {/* DELETE BTN*/}
        <form
          action={`#`}
          className=" font-bold cursor-pointer bg-gray-100 rounded-lg h-[40px] px-4 flex items-center"
        >
          <button className="hoverAnimate">
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
