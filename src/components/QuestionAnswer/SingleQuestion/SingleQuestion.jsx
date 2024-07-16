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
    <div className="relative">
      <div
        className={`z-[80] bg-[--bgSoft] ${
          isFullScreen
            ? "fixed top-0 right-0 h-full w-full overflow-y-auto"
            : "h-full w-full"
        }`}
      >
        <div className="flex flex-col  pt-6 pb-6">
          <div
            className={`relative ${
              isFullScreen ? "h-screen w-full" : "h-[500px] w-full"
            }`}
          >
            <Image src={ques.imgs[0]} alt="" fill className="object-contain" />
          </div>
          <p
            className={`globPadX ${
              isFullScreen ? "pt-10 pb-20" : "pt-2"
            } text-[--text] text-[1em]`}
          >
            {ques?.ques}
          </p>
        </div>
      </div>

      <div
        className={`z-[80] ${
          isFullScreen ? "fixed top-6 right-8" : "absolute top-4 right-4"
        } bg-[--bg] text-[--text] text-[1.1em] p-2 hoverAnimateFast cursor-pointer opacity-50 hover:opacity-100`}
        onClick={() => setIsFullScreen(!isFullScreen)}
      >
        {isFullScreen ? <AiOutlineFullscreen /> : <BsArrowsFullscreen />}
      </div>
    </div>
  );
}
