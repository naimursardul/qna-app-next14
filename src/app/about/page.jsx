import AboutProfile from "@/components/AboutProfile/AboutProfile";
import { FcAbout } from "react-icons/fc";

export default function About() {
  return (
    <div className="my-10 flex flex-col gap-12  w-[600px] max-md:w-[80%] mx-auto ">
      <h1 className="flex gap-2 items-center text-[--btnSoft] text-4xl font-[400] mb-5">
        <FcAbout />
        <span>About us</span>
      </h1>

      <div>
        <h2 className="text-2xl text-[--btnSoft] mb-4">Who are we?</h2>
        <p className="text-[--textSoft]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          dignissimos illo odit maxime commodi sequi dolore autem praesentium
          rem, facilis aliquid a tenetur placeat explicabo? Tempore omnis porro,
          dolorem saepe consequuntur temporibus placeat!
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-[--btnSoft] mb-4">
          What are our motives?
        </h2>
        <p className="text-[--textSoft]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          dignissimos illo odit maxime commodi sequi dolore autem praesentium
          rem, facilis aliquid a tenetur placeat explicabo? Tempore omnis porro,
          dolorem saepe consequuntur temporibus placeat! Recusandae, quia.
          Laudantium ratione neque nulla dicta natus, eos facere ea nam eligendi
          asperiores quae! Quisquam, aperiam!
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-[--btnSoft] mb-12">Our Directors</h2>
        <div className="flex flex-col gap-20">
          <AboutProfile />
          <AboutProfile />
          <AboutProfile />
        </div>
      </div>
    </div>
  );
}
