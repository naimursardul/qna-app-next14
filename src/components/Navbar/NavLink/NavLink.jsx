"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <Link
      href={link?.path}
      className={`font-[500] text-sm flex justify-center text-[--text] hover:text-[--textSoft] hover:bg-[--navBgSoft] px-3 py-2 rounded-full  ${
        pathName === link?.path ? "bg-[--navBgSoft] px-3 py-2 rounded-full" : ""
      }`}
    >
      {link?.name}
    </Link>
  );
}
