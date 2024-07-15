"use client";

import { useFormStatus } from "react-dom";
import { IoIosSend } from "react-icons/io";

export default function SubmitBtn({ title }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="btn bg-[--btn] hover:opacity-80 rounded-lg text-[--text]"
    >
      {pending ? (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[--text]"></div>
      ) : (
        <div className="flex items-center gap-2">
          {title} <IoIosSend />
        </div>
      )}
    </button>
  );
}
