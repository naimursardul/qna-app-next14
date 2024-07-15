"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlineFullscreen } from "react-icons/ai";

export default function SingleQuestion({ ques }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

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
  return (
    <div className="flex flex-col gap-10">
      {/* IMAGE */}
      {!isFullScreen ? (
        <div className="mx-auto">
          {ques?.imgs.length &&
            ques.imgs.map((img, i) => (
              <div
                key={i}
                className="relative w-[500px] max-sm:w-[280px] h-[500px] max-sm:h-[300px] bg-[--bgSoft] "
              >
                <Image src={img} alt="" fill className="object-contain " />
                <div
                  className="absolute top-1 right-1 bg-[--bgSofter] text-[--text] p-1 rounded hoverAnimateFast cursor-pointer opacity-50 hover:opacity-100"
                  onClick={() => setIsFullScreen(!isFullScreen)}
                >
                  <BsArrowsFullscreen />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="fixed z-40 top-0 left-0 h-full w-full">
          {ques?.imgs.length &&
            ques.imgs.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-full bg-[--bgSoft] border-none "
              >
                <Image src={img} alt="" fill className="object-contain " />
                <div
                  className="absolute top-2 right-2 bg-[--bg] text-[--text] p-2 hoverAnimateFast cursor-pointer opacity-50 hover:opacity-100"
                  onClick={() => setIsFullScreen(!isFullScreen)}
                >
                  <AiOutlineFullscreen />
                </div>
              </div>
            ))}
        </div>
      )}

      {/* OTHERS DETAILS */}
      <div className="bg-[--bgSoft] w-full flex flex-col gap-4 py-3 px-4">
        <div className="flex gap-2 justify-between font-bold text-[--text] text-sm">
          <p>{ques?.sub}</p>
          <p>{`Chapter: ` + ques?.chap}</p>
        </div>
        <p className="text-[--textSoft]">{ques?.ques}</p>
      </div>
    </div>
  );
}
