import MobileLinks from "../MobileLinks/MobileLinks";
import NavLink from "./NavLink/NavLink";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Ask Question", path: "/ask-question" },
    { name: "All Questions", path: "/questions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const session = false;

  return (
    <div className="px-[50px] flex justify-between items-center h-[75px] shadow-md ">
      <h2 className="text-2xl text-blue-500">BRAND NAME</h2>
      <div className="flex gap-12 max-lg:hidden">
        <div className="flex gap-5 ">
          {links?.map((link, index) => (
            <NavLink link={link} key={index} />
          ))}
        </div>
        {!session && (
          <div className="flex gap-5">
            <NavLink link={{ name: "Sign up", path: "/signup" }} />
            <NavLink link={{ name: "Log in", path: "/login" }} />
          </div>
        )}
      </div>
      <div className="lg:hidden">
        <MobileLinks props={{ session, links }} />
      </div>
    </div>
  );
}
