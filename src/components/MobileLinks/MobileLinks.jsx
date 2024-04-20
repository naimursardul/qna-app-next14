"use client";

import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import NavLink from "../Navbar/NavLink/NavLink";
import { useState } from "react";

export default function MobileLinks({ props }) {
  const { links, session } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross1 /> : <FaBarsStaggered />}
      </div>
      {isOpen && (
        <div className="scale-up-tr z-50 absolute right-0 top-[75px] h-[calc(100vh-75px)] w-1/2 flex flex-col items-center justify-center gap-8 bg-gray-100 ">
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
                <NavLink link={{ name: "Sign up", path: "/signup" }} />
              </div>
              <div onClick={() => setIsOpen(!isOpen)}>
                <NavLink link={{ name: "Log in", path: "/login" }} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
