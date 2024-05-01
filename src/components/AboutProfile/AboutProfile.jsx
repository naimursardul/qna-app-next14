import Image from "next/image";

export default function AboutProfile() {
  return (
    // <div className="flex gap-10 max-md:flex-col p-8 max-sm:p-6 rounded-md shadowColor">
    <div className="flex gap-10 max-md:flex-col p-8 max-sm:p-6 rounded-md bg-[--bgSoft]">
      <div className="w-full">
        <div className="relative w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px] mx-auto">
          <Image
            src={`/aboutme.png`}
            fill
            alt=""
            className="rounded-[100%] bg-[--textSoft] border"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-[500] text-[--text]">Naimur Rahman</p>
          <p className="text-[--textSoft]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            autem eligendi fuga unde dolorum! Mollitia unde sunt sed soluta qui!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, reprehenderit.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-[600] text-[--btnSoft]">Contacts:</h3>
          <p className="text-[--textSoft] flex flex-wrap gap- justify-between min-w-[200px]">
            <span className="text-[--text]">Email:</span> naimur@gamil.com
          </p>
          <p className="text-[--textSoft] flex gap-1 justify-between min-w-[200px]">
            <span className="text-[--text]">Phone:</span> 01407348304
          </p>
        </div>
      </div>
    </div>
  );
}
