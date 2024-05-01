import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

export default function LoginForm() {
  return (
    <div className="my-8 flex flex-row-reverse gap-12 max-md:flex-col w-[600px] max-md:w-[300px] bg-[--bgSoft] mx-auto px-8 py-8 rounded-xl ">
      {/* with credentials */}
      <div className="w-full">
        <h1 className="flex items-center gap-2 text-3xl text-[--btnSoft] font-[400] mb-4 max-md:text-center">
          <CiLogin />
          <span>Login</span>
        </h1>
        <form action="#" className=" flex flex-col gap-3">
          <input
            type="text"
            name="phone"
            placeholder="Mobile number"
            className="inputField text-[--text] bg-[--bgSofter] "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inputField text-[--text] bg-[--bgSofter] "
          />
          <button className="btn bg-[--btn] text-[--text] rounded-lg ">
            Log in{" "}
          </button>
          <small className="flex justify-center gap-1 text-[--textSoft]">
            <span>{`Don't have any account?`}</span>
            <Link
              className="ml-1 text-[--text] font-bold hover:text-[--textSoft] "
              href={`/signup`}
            >
              Sign up
            </Link>
          </small>
        </form>
      </div>
      {/* dividor */}
      <div className="md:hidden w-full relative flex items-center justify-center">
        <div className="absolute left-0 top-1/2 w-1/4 border-b border-[--textSoft]"></div>
        <small className="text-[--textSoft]">or, sign in with</small>
        <div className="absolute right-0 top-1/2 w-1/4  border-b border-[--textSoft]"></div>
      </div>
      {/* google + facebook */}
      <div className="mt-5 w-full flex flex-col justify-center items-center gap-6 px-4">
        <form action="#" className="w-full">
          <button className="btn bg-black rounded-xl text-[white]">
            <FaGoogle />
            Sign in with google
          </button>
        </form>
        <div className="max-md:hidden w-full relative flex items-center justify-center">
          <div className="absolute left-0 top-1/2 w-2/5 border-b border-[--textSoft] "></div>
          <small className="text-[--textSoft]">or</small>
          <div className="absolute right-0 top-1/2 w-2/5 border-b border-[--textSoft] "></div>
        </div>
        <form action="#" className="w-full">
          <button className="btn bg-blue-600 rounded-xl text-[white] ">
            <FaFacebook />
            Sign in with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}
