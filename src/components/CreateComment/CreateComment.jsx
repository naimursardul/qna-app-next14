import { addComment } from "@/lib/data";

export default function CreateComment({ ans }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xl max-md:text-lg text-[--btnSoft]">
        Add your comment here:
      </h3>

      <form action={addComment} className="mt-2 flex gap-2">
        <textarea
          name="cmnt"
          rows="1"
          placeholder="Type here..."
          className="w-full bg-[--bgSoftest] text-[--text] outline-none border-none pt-2 pb-1 px-2 rounded "
        ></textarea>
        <input type="hidden" name="userId" value={"742678738"} />
        <input type="hidden" name="qId" value={ans?.qId} />
        <input type="hidden" name="ansId" value={ans?._id} />{" "}
        <div>
          <button className=" px-4 py-2 bg-[--btn] rounded text-[--text] hover:bg-[--btnSoft] ">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
