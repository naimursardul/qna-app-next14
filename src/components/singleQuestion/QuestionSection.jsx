import Image from "next/image";

export default function QuestionSection({ ques }) {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="relative min-h-[80vh] border-none ">
        <Image src={`/qn1.png`} alt="" fill className="object-contain " />
      </div>
      <div className="flex flex-col gap-4 py-3 ">
        <div className="flex gap-2 justify-between font-bold text-[--text] text-sm">
          <p>{ques?.sub}</p>
          <p>{`Chapter: ` + ques?.chap}</p>
        </div>
        <p className="text-[--textSoft]">{ques?.ques}</p>
      </div>
    </div>
  );
}
