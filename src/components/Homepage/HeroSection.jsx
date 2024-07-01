import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div className="globPad flex max-md:flex-col gap-[100px] max-md:gap-[50px] items-center">
      <div className="w-full max-md:text-center">
        <h1 className="text-5xl text-[--btnSoft] font-bold mb-2">
          Welcome to Brand Name.
        </h1>
        <p className="text-[--textSoft]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat
          illo odit sint eos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iste sit hic quae corrupti praesentium saepe ipsum odio quisquam
          eligendi pariatur ducimus soluta necessitatibus, accusamus voluptate
          in sequi? Nihil, inventore velit?
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <Link
          href={"/questions"}
          className="w-full flex gap-[3px] justify-center items-center bg-[--bgSoft] hover:opacity-80 text-lg font-bold text-[--textSoft] border-2 border-dashed border-[--text] rounded-xl px-8 py-10 "
        >
          <span>Find questions</span>
          <FaSearch />
        </Link>
        <Link
          href={"/ask-question"}
          className="w-full flex gap-[3px] justify-center items-center bg-[--bgSoft] hover:opacity-80 text-lg font-bold text-[--btnSoft] border-2 border-dashed border-[--text] rounded-xl px-8 py-10 "
        >
          <span>Ask questions</span>
          <FaQuestion />
        </Link>
      </div>
    </div>
  );
}
