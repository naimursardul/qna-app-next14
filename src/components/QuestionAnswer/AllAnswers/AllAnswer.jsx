"use client";

import { useEffect, useState } from "react";
import { LiaComment } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteAnswer, updateAns } from "@/lib/server_actions/answer_action";
import Comments from "@/components/Comments/Comments";
import Star from "./Star";
import SubmitBtn from "@/components/SubmitBtn";
import UploadImg from "@/components/UploadImg/UploadImg";
import DisplayAnswer from "./DisplayAnswer/DisplayAnswer";
import { getAllComments } from "@/lib/server_actions/comments_action";

export default function AllAnswer({ props }) {
  const { ans, ques } = props;
  const [cmnts, setCmnts] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [imgs, setImgs] = useState([]);
  const imgStr = imgs?.join(",");
  console.log(imgStr);

  console.log(ans);

  // UPDATE ANSWER
  const handleUpdateAns = (formData) => {
    const data = Object.fromEntries(formData);
    // toast.promise(updateAns, {
    //   success: "Answer updated successfully.",
    //   pending: "Answer updated successfully.",
    //   error: "Error in updating!",
    // });
  };

  // getAnswerCmnts();
  useEffect(() => {
    const getAnswerCmnts = async () => {
      try {
        const allCmnts = await getAllComments(ans?._id);
        console.log(ans._id);
        console.log(allCmnts);
        setCmnts(allCmnts);
      } catch (error) {
        console.log(error);
      }
    };
    getAnswerCmnts();
  }, [ans?._id]);

  //   DELETE ANS
  const handleDeleteAnswer = async () => {
    setIsPopUp(!isPopUp);
    await deleteAnswer(ans?._id);
  };

  return (
    <div className="flex flex-col bg-[--bgSoft] rounded-xl pt-3">
      {isEdit && (
        <>
          <div className="z-20 fixed top-0 left-0 h-full w-full bg-[--bg] opacity-65"></div>
          <div className="z-30 fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  bg-[--bgSofter] max-sm:w-[280px] max-md:w-[500px] w-[600px] py-5">
            <form
              action={handleUpdateAns}
              className="flex flex-col gap-5 px-4 mb-4 text-[1em]"
            >
              <input type="hidden" name="ansId" value={ans?._id} />
              {/* IMAGE */}
              <input type="hidden" name="ansImgs" value={imgStr} />
              <UploadImg props={{ setImgs, imgs, isMultiple: true }} />
              <textarea
                name="newAns"
                rows="10"
                defaultValue={ans?.ans}
                className="px-4 py-2 border outline-none border-none rounded bg-[--bgSoftest] text-[--text]"
              ></textarea>
              <SubmitBtn title={"Submit"} />
            </form>
            <form action={() => setIsEdit(!isEdit)} className="px-4">
              <button className="btn bg-[--bgSoftest] text-[--text] rounded">
                Cancel
              </button>
            </form>
          </div>
        </>
      )}
      <DisplayAnswer props={{ ans, ques }} />

      {/* INTERACTIONS */}
      <div className="px-5 py-2 mt-8 flex items-center justify-start gap-5 bg-[--bgSofter] text-[--textSoft] ">
        {/* STAR */}
        <Star ans={ans} />

        {/* COMMENTS BTN*/}
        <form className="flex items-center" action={() => setIsOpen(!isOpen)}>
          <button className="hoverAnimateFast text-[1.4em]">
            <LiaComment />
          </button>
        </form>

        {/* EDIT BTN*/}
        <form className="flex items-center" action={() => setIsEdit(!isEdit)}>
          <button className="hoverAnimateFast text-[1.2em]">
            <FaRegEdit />
          </button>
        </form>

        {/* DELETE BTN*/}
        <form className="flex items-center" action={() => setIsPopUp(!isPopUp)}>
          <button className="hoverAnimateFast text-[1.3em]">
            <RiDeleteBinLine />
          </button>
        </form>
        {isPopUp && (
          <div>
            <div className="fixed top-0 left-0  h-screen w-screen z-20 opacity-50 bg-black "></div>
            <div className="z-30 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-md max-sm:w-[280px] flex flex-col gap-3 bg-[--bgSofter] px-5 py-4  ">
              <h3 className="text-[1em] text-[--text] font-semibold ">
                Delete
              </h3>
              <p className="text-[1em] text-[--text]">
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
