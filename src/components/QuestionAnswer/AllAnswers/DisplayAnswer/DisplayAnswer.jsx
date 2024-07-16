"use state";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function DisplayAnswer({ props }) {
  const [allImgs, setAllImgs] = useState(null);
  const { ans, ques } = props;
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [seeQues, setSeeQues] = useState(false);
  useEffect(() => {
    if (isFullScreen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isFullScreen]);

  console.log(ques);
  console.log(seeQues);
  // if (isFullScreen) {
  //   oldArr = ans.imgs;
  //   // const newArr = [...ques.imgs, ...oldArr];
  //   console.log(newArr);
  // } else {
  //   setAllImgs(ans.imgs);
  // }

  return (
    <div className="relative">
      <div
        className={`bg-[--bgSoft]  ${
          isFullScreen
            ? "z-[80] fixed top-0 left-0 h-full w-full overflow-y-auto"
            : "px-4"
        }`}
      >
        <div className={`${!isFullScreen && "flex justify-center"}`}>
          <div
            className={`flex gap-2 ${
              !isFullScreen ? "flex-row overflow-x-auto" : "flex-col"
            }`}
          >
            {ans?.imgs.length &&
              ans.imgs.map((img, i) => (
                <div
                  key={i}
                  className={`relative  ${
                    !isFullScreen
                      ? "min-w-[250px] min-h-[300px]"
                      : "w-full min-h-screen"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className={`object-contain bg-[--bgSofter] `}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* ANSWER TEXT */}
        {ans?.ans && (
          <p className={`px-5 pt-2 ${isFullScreen && "pb-16"} text-[--text]`}>
            {ans.ans}
          </p>
        )}
        <div
          className={`${
            isFullScreen
              ? "z-[80] fixed top-6 right-10"
              : "absolute top-0 right-3"
          } bg-[--bgSoft] text-[--text] p-1 rounded hoverAnimateFast cursor-pointer opacity-50 hover:opacity-100`}
          onClick={() => setIsFullScreen(!isFullScreen)}
        >
          {!isFullScreen ? <BsArrowsFullscreen /> : <AiOutlineFullscreen />}
        </div>
        {isFullScreen && (
          <>
            <div
              onClick={() => setSeeQues(!seeQues)}
              className="z-[80] fixed top-16 right-10 text-[--btn] cursor-pointer text-[1.1em] bg-[--bgSoft] p-1 rounded hoverAnimateFast"
            >
              {seeQues ? <FaEyeSlash /> : <FaEye />}
            </div>
            {seeQues && (
              <>
                {/* <div className="fixed top-0 right-0 h-screen w-screen bg-[--bg] opacity-75"></div> */}
                <div className="fixed top-0 right-0 h-full w-full bg-[--bgSoft] overflow-y-auto">
                  <div className="flex flex-col ">
                    <div className="relative h-screen w-full">
                      <Image
                        src={ques.imgs[0]}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="globPadX pt-10 pb-20 text-[--text] text-[1em]">
                      {ques?.ques}
                    </p>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
