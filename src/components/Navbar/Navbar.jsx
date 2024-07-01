import { UserButton } from "@clerk/nextjs";
import MobileLinks from "../MobileLinks/MobileLinks";
import NavLink from "./NavLink/NavLink";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Ask Question", path: "/ask-question" },
    { name: "All Questions", path: "/questions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const { userId: session } = auth();
  console.log(session);
  return (
    <div className="px-[50px] flex justify-between items-center h-[75px] shadow-md ">
      <h2 className="text-2xl text-[--text]">
        <Link href={"/"}>BRAND NAME</Link>
      </h2>
      <div className="flex gap-12 max-lg:hidden">
        <div className="flex gap-2 ">
          {links?.map((link, index) => (
            <NavLink link={link} key={index} />
          ))}
        </div>
        {session ? (
          <div>
            <UserButton />{" "}
          </div>
        ) : (
          <div className="flex gap-2">
            <NavLink link={{ name: "Sign up", path: "/sign-up" }} />
            <NavLink link={{ name: "Log in", path: "/sign-in" }} />
          </div>
        )}
      </div>
      <div className="lg:hidden">
        <MobileLinks props={{ session, links }} />
      </div>
    </div>
  );
}
