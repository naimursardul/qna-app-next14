import { FaVideo } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";

export default function ServiceSection() {
  return (
    <div className="globPad flex flex-col gap-8 items-center mt-[50px] bg-[--bgSoft]">
      <div className="flex flex-col gap-3 justify-center text-center">
        <h2 className="text-4xl font-bold text-center text-[--btnSoft]">
          Our Services
        </h2>
        <p className="text-[--text] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptas reiciendis inventore laborum qui aliquam enim, tenetur fuga
          maxime neque dolores illo nesciunt consequuntur. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Recusandae, dicta?
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 text-center">
        <div className="h-[180px] flex flex-col gap-2 items-center justify-center bg-[--bg] hover:opacity-70 rounded-2xl px-4">
          <FaVideo className="text-4xl text-[--btn]" />
          <span className="text-[--text] text-xl max-md:text-lg max-sm:text-md font-[500]">
            Recorded Class
          </span>
        </div>
        <div className="h-[180px] flex flex-col gap-2 items-center justify-center bg-[--bg] hover:opacity-70 rounded-2xl px-4">
          <MdOutlineNoteAlt className="text-4xl text-[--btn]" />
          <span className="text-[--text] text-xl max-md:text-lg max-sm:text-md font-[500]">
            Board Question Solve
          </span>
        </div>
        <div className="h-[180px] flex flex-col gap-2 items-center justify-center bg-[--bg] hover:opacity-70 rounded-2xl px-4">
          <FaQuestion className="text-4xl text-[--btn]" />
          <span className="text-[--text] text-xl max-md:text-lg max-sm:text-md font-[500]">
            QNA
          </span>
        </div>
        <div className="h-[180px] flex flex-col gap-2 items-center justify-center bg-[--bg] hover:opacity-70 rounded-2xl px-4">
          <TbBrandSpeedtest className="text-4xl text-[--btn]" />
          <span className="text-[--text] text-xl max-md:text-lg max-sm:text-md font-[500]">
            Online MCQ Exam
          </span>
        </div>
      </div>
    </div>
  );
}
