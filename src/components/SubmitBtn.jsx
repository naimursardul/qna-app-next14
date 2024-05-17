"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="btn bg-[--btn] hover:opacity-80 rounded-lg text-[--text]"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
}
