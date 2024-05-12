import Image from "next/image";

export default function QnaBox({ ques }) {
  return (
    <div
      href={`/questions/${ques?.id}`}
      className="w-[300px]  flex flex-col bg-[--bgSoft] rounded-lg hoverAnimate p-3"
    >
      {ques?.imgs[0] &&
        ques.imgs.map((img) => (
          <div className="relative h-[200px] ">
            <Image src={img} alt="" fill className="object-cover rounded-lg" />
          </div>
        ))}
      <div className="flex flex-col gap-4 px-1 py-3">
        <div className="flex gap-2 justify-between font-bold text-[--text] text-sm">
          <p>{ques?.sub}</p>
          <p>{`Chapter: ` + ques?.chap}</p>
        </div>
        <p className="text-[--textSoft]">
          {(ques?.ques).slice(0, 105)}{" "}
          <span className="font-bold hover:text-[--btnSoft] ">
            Read more...
          </span>
        </p>
      </div>
    </div>
  );
}
