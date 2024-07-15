"use client";

import { updateStar } from "@/lib/server_actions/answer_action";
import { useState } from "react";
import toast from "react-hot-toast";
import { PiStarFill, PiStarBold } from "react-icons/pi";

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
    try {
      await updateStar(data);
    } catch (error) {
      toast.error("Error in adding star!");
    }
  };

  return (
    <div className="flex items-center gap-[2px]">
      <span className="text-[1.1em]">{val}</span>
      <button
        onClick={handleStar}
        className=" hoverAnimateFast font-bold text-[1.1em] "
      >
        {star ? <PiStarFill className="text-blue-600" /> : <PiStarBold />}
      </button>
    </div>
  );
}
