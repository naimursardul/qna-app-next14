import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="my-10 flex justify-center items-center">
      <SignUp />
    </div>
  );
}
