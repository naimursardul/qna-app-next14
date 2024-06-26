"use client";

import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import NavLink from "../Navbar/NavLink/NavLink";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

export default function MobileLinks({ props }) {
  const { links, session } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-6">
      <UserButton />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-[--text] z-[60] "
      >
        {isOpen ? <RxCross1 /> : <FaBarsStaggered />}
      </div>
      {isOpen && (
        <div className="slide-left z-50 absolute right-0 left-0 top-0 h-screen w-full flex flex-col items-center justify-center gap-8 bg-[--bgSoft]">
          <div
            className="flex flex-col gap-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {links?.map((link, index) => (
              <NavLink link={link} key={index} />
            ))}
          </div>
          {!session && (
            <div className="flex flex-col gap-3">
              <div onClick={() => setIsOpen(!isOpen)}>
                <NavLink link={{ name: "Sign up", path: "/sign-up" }} />
              </div>
              <div onClick={() => setIsOpen(!isOpen)}>
                <NavLink link={{ name: "Sign in", path: "/sign-in" }} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
