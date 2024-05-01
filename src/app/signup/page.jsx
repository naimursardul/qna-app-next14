import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";

export default function SignUpForm() {
  return (
    <div className="my-8 flex flex-row-reverse gap-12 max-md:flex-col w-[600px] max-md:w-[300px] bg-[--bgSoft] mx-auto px-8 py-8 rounded-xl">
      {/* <div className="my-8 flex flex-row-reverse gap-12 max-md:flex-col w-[600px] max-md:w-[300px] mx-auto px-8 py-8 rounded shadowColor"> */}
      {/* with credentials */}
      <div className="w-full">
        <h1 className="flex gap-2 items-center text-3xl text-[--btnSoft] font-[400] mb-4 max-md:text-center">
          <span>Sign Up</span>
          <SiGnuprivacyguard />
        </h1>
        <form action="#" className="flex flex-col gap-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="inputField text-[--text] bg-[--bgSofter] "
          />
          <input
            type="text"
            name="phone"
            placeholder="Mobile number"
            className="inputField text-[--text] bg-[--bgSofter] "
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="inputField text-[--text] bg-[--bgSofter] "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inputField text-[--text] bg-[--bgSofter] "
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="inputField text-[--text] bg-[--bgSofter] "
          />
          <button className="btn bg-[--btn] hover:bg-[--btnSoft] text-[--text] rounded-lg ">
            Sign up
          </button>
          <small className="mx-auto text-[--textSoft]">
            Already have an account?{" "}
            <Link
              className="ml-1 text-[--text] font-bold hover:text-[--textSoft]  "
              href={`/login`}
            >
              Login
            </Link>
          </small>
        </form>
      </div>
      {/* dividor */}
      <div className="md:hidden w-full relative flex items-center justify-center">
        <div className="absolute left-0 top-1/2 w-1/4 border-b border-[--textSoft]"></div>
        <small className="text-[--textSoft]">or, sign up with</small>
        <div className="absolute right-0 top-1/2 w-1/4  border-b border-[--textSoft]"></div>
      </div>
      {/* google + facebook */}
      <div className="w-full flex flex-col justify-center items-center gap-6 px-4">
        <form action="#" className="w-full">
          <button className="btn bg-black rounded-xl text-[white]">
            <FaGoogle />
            Sign up with google
          </button>
        </form>
        <div className="max-md:hidden w-full relative flex items-center justify-center">
          <div className="absolute left-0 top-1/2 w-2/5 border-b border-[--textSoft]"></div>
          <small className="text-[--textSoft]">or</small>
          <div className="absolute right-0 top-1/2 w-2/5  border-b border-[--textSoft]"></div>
        </div>
        <form action="#" className="w-full">
          <button className="btn bg-blue-600 rounded-xl text-[white] ">
            <FaFacebook />
            Sign up with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}
