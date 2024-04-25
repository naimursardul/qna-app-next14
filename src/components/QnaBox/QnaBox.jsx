import Image from "next/image";
import Link from "next/link";

export default function QnaBox({ ques }) {
  return (
    <Link
      href={`/questions/${ques?.id}`}
      className="w-[300px] shadow-lg hoverAnimate flex flex-col rounded-lg"
    >
      <div className="relative h-[200px]">
        <Image
          src={`/qn1.png`}
          alt=""
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-4 px-5 py-3">
        <div className="text-sm flex gap-10 justify-between font-semibold text-gray-400 ">
          <p>{ques?.sub}</p>
          <p>{ques?.chap}</p>
        </div>
        <p>{ques?.ques}</p>
      </div>
    </Link>
  );
}
