import Image from "next/image";
import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

export default function SingleQuestion({ ques }) {
  return (
    <div className="flex flex-col gap-10 globPad">
      <div className="w-full">
        {ques?.imgs.length &&
          ques.imgs.map((img, i) => (
            <div key={i} className="relative w-[500px] border-none ">
              <img src={img} alt="" fill className="object-contain " />
              <BsArrowsFullscreen className="bg-[--bg] text-[--text] " />
            </div>
          ))}
      </div>
      <div className="w-full flex flex-col gap-4 py-3 ">
        <div className="flex gap-2 justify-between font-bold text-[--text] text-sm">
          <p>{ques?.sub}</p>
          <p>{`Chapter: ` + ques?.chap}</p>
        </div>
        <p className="text-[--textSoft]">{ques?.ques}</p>
      </div>
    </div>
  );
}
