"use client";

import { updateStar } from "@/lib/action";
import { useState } from "react";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function Star({ ans }) {
  const [star, setStar] = useState(false);
  const [val, setVal] = useState(ans?.star);

  const handleStar = async () => {
    setStar(!star);

    let newVal;
    if (!star) {
      newVal = val + 1;
    }
    if (star) {
      newVal = val - 1;
    }
    setVal(newVal);
    const data = { star: newVal, ansId: ans?._id };
    await updateStar(data);
  };

  return (
    <div className="flex items-center gap-[2px]">
      <span className="text-md">{val}</span>
      <button onClick={handleStar} className=" hoverAnimate font-bold text-lg ">
        {star ? (
          <MdOutlineStarPurple500 className="text-blue-600" />
        ) : (
          <MdOutlineStarOutline />
        )}
      </button>
    </div>
  );
}
