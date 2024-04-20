import Image from "next/image";

export default function AboutProfile() {
  return (
    <div className="flex gap-10 max-md:flex-col p-8 max-sm:p-6 rounded-md shadow-md">
      <div className="w-full">
        <div className="relative w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px] mx-auto">
          <Image
            src={`/aboutme.png`}
            fill
            alt=""
            className="rounded-[100%] bg-gray-100 border border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-[500] ">Naimur Rahman</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            autem eligendi fuga unde dolorum! Mollitia unde sunt sed soluta qui!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, reprehenderit.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-[600] ">Contacts:</h3>
          <p>Email: naimur@gmail.com</p>
          <p>Phone: 01407348304</p>
        </div>
      </div>
    </div>
  );
}
