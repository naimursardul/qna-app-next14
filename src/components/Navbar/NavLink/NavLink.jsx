"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <Link
      href={link?.path}
      className={` font-[500] flex justify-center hover:text-blue-500 ${
        pathName === link?.path ? "border-b border-blue-600 text-blue-600" : ""
      }`}
    >
      {link?.name}
    </Link>
  );
}
