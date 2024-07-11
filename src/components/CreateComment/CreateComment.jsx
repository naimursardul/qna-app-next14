import { addComment } from "@/lib/server_actions/action";

export default function CreateComment({ ans }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-2xl max-md:text-xl text-[--text]">
        Add your comment here:
      </h3>

      <form action={addComment} className="mt-2 flex gap-2">
        <textarea
          name="cmnt"
          rows="1"
          placeholder="Type here..."
          className="w-full bg-[--bgSoftest] text-[--text] outline-none border-none py-3 px-2 rounded "
        ></textarea>
        <input type="hidden" name="userId" value={"742678738"} />
        <input type="hidden" name="qId" value={ans?.qId} />
        <input type="hidden" name="ansId" value={ans?._id} />{" "}
        <div>
          <button className=" px-4 py-3 bg-[--btn] rounded text-[--text] hover:bg-[--btnSoft] ">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
