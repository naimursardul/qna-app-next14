import Image from "next/image";

export default function QuestionSection({ ques }) {
  return (
    <div className="flex flex-col gap-10  ">
      <div className="relative min-h-[80vh] border bg-gray-100 ">
        <Image src={`/qn1.png`} alt="" fill className="object-contain " />
      </div>
      <div className="flex flex-col gap-4 py-3 ">
        <div className="text-sm flex gap-10 justify-between font-semibold text-gray-400 ">
          <p>{ques?.sub}</p>
          <p>Chapter: {ques?.chap}</p>
        </div>
        <p>{ques?.ques}</p>
      </div>
    </div>
  );
}
