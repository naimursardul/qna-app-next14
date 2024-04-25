"use client";

import { updateStar } from "@/lib/data";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

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
    <form action={handleStar} className="flex items-center gap-[2px]">
      <span>{val}</span>
      <button className="hoverAnimate font-bold text-lg">
        {star ? <FaStar className="text-blue-600" /> : <CiStar />}
      </button>
    </form>
  );
}
